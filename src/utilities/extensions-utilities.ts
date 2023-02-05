import { ExtensionCodeFileModel } from "@/data/models/extension-code-file";
import { ExtensionConfigModel } from "@/data/models/extension-config-model";
import { ExtensionModel } from "@/data/models/extension-model";
import { ExtensionRepositoryDetailsModel } from "@/data/models/extension-repository-details-model";
import { FetchResponseModel } from "@/data/models/fetch-response-model";
import { GitHubFileModel } from "@/data/models/github-file-model";
import * as ExtensionsProvider from "@/data/providers/extensions-provider";
import { EditorUtilities } from "./editor-utilities";

/**
 * Utility functions for working with extensions.
 */
export class ExtensionsUtilities {
	/**
	 * Returns extension repository details from a url.
	 */
	private static getExtensionRepositoryDetails(url: string): ExtensionRepositoryDetailsModel {
		const extensionUrl: URL = new URL(url);
		const pathname: Array<string> = extensionUrl.pathname.split("/");

		return {
			author: pathname[1],
			name: pathname[2]
		};
	}

	/**
	 * Returns content for an extension file from GitHub.
	 */
	private static getExtensionFileContent(file: GitHubFileModel): string {
		return atob(file.content);
	} 

	/**
	 * Returns the contents of an extension from a GitHub repository.
	 */
	private static async getExtensionContentsFromGitHub(url: string): Promise<ExtensionModel | undefined> {
		try {
			const repo: ExtensionRepositoryDetailsModel = this.getExtensionRepositoryDetails(url);

			const config: FetchResponseModel<GitHubFileModel> = await ExtensionsProvider.getConfigAsync(repo.author, repo.name);
			const definitions: FetchResponseModel<GitHubFileModel> = await ExtensionsProvider.getDefinitionsAsync(repo.author, repo.name);
			const generators: FetchResponseModel<GitHubFileModel> = await ExtensionsProvider.getGeneratorsAsync(repo.author, repo.name);
			const toolbox: FetchResponseModel<GitHubFileModel> = await ExtensionsProvider.getToolboxAsync(repo.author, repo.name);

			if (config.data && definitions.data && generators.data && toolbox.data) {
				const configContents: ExtensionConfigModel = JSON.parse(this.getExtensionFileContent(config.data));
				const codeFiles: Array<ExtensionCodeFileModel> = [];

				if (configContents.library) {
					const library: FetchResponseModel<GitHubFileModel> = await ExtensionsProvider.getLibraryAsync(repo.author, repo.name, configContents.library);

					if (library.data) {
						codeFiles.push({
							name: configContents.library,
							content: this.getExtensionFileContent(library.data)
						});
					}
				}
				else {
					configContents.code.forEach(async (filename: string) => {
						const code: FetchResponseModel<GitHubFileModel> = await ExtensionsProvider.getLibraryAsync(repo.author, repo.name, filename);

						if (code.wasSuccessful && code.data) {
							codeFiles.push({
								name: filename,
								content: this.getExtensionFileContent(code.data)
							});
						}
					});
				}

				return {
					url,
					config: JSON.parse(this.getExtensionFileContent(config.data)),
					definitions: this.getExtensionFileContent(definitions.data),
					generators: this.getExtensionFileContent(generators.data),
					toolbox: this.getExtensionFileContent(toolbox.data),
					code: codeFiles
				};
			}
			else {
				return undefined;
			}

		}
		catch (error) {
			throw error;
		}
	}

	/**
	 * Loads an extension blocks script into the document.
	 */
	private static loadExtensionBlocksScript(script: string): void {
		const scriptElement: HTMLScriptElement = document.createElement("script");
		scriptElement.type = "text/javascript";
		scriptElement.text = script;
		document.body.appendChild(scriptElement);
	}

	/**
	 * Adds an extension to the list of active extensions for the current project.
	 */
	private static addExtensionToCurrentProject(extension: ExtensionModel): void {
		if (EditorUtilities.currentProject.value) {
			if (!EditorUtilities.currentProject.value.extensions) {
				EditorUtilities.currentProject.value.extensions = [];
			}

			EditorUtilities.currentProject.value.extensions.push(extension);
		}
	}

	/**
	 * Returns toolbox entries for all the loaded extensions.
	 */
	public static getToolboxEntriesForExtensions(): string {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.extensions) {
			return EditorUtilities.currentProject.value.extensions.reduce((previous: string, extension: ExtensionModel) => {
				return previous + extension.toolbox;
			}, "");

		}
		else {
			return "";
		}
	}

	/**
	 * Updates the blockly editor toolbox.
	 */
	private static updateBlocklyToolbox(): void {
		if (EditorUtilities.blocklyInstance) {
			let toolboxXML: string = "<xml>";
			if (EditorUtilities.currentProject.value) {
				toolboxXML += EditorUtilities.currentProject.value.mode.getToolbox().join("\n");
			}
			toolboxXML += "</xml>";

			EditorUtilities.blocklyInstance.updateToolbox(toolboxXML);
		}
	}

	/**
	 * Loads an extension into the editor.
	 */
	public static async loadExtensionFromUrl(url: string): Promise<void> {
		try {
			const extension: ExtensionModel | undefined = await this.getExtensionContentsFromGitHub(url);

			if (EditorUtilities.currentProject.value && extension) {
				this.loadExtensionBlocksScript(extension.definitions);
				this.loadExtensionBlocksScript(extension.generators);
				this.addExtensionToCurrentProject(extension);
				this.updateBlocklyToolbox();
			}
		}
		catch {
			//
		}
	}

	/**
	 * Loads the required extension for a project from firestore.
	 */
	public static async loadExtensionsForCurrentProject(): Promise<void> {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject && EditorUtilities.currentProject.value.firestoreProject.extensions) {
			for await (const extensionUrl of EditorUtilities.currentProject.value.firestoreProject.extensions) {
				await this.loadExtensionFromUrl(extensionUrl);
			}
		}
	}

	/**
	 * Returns URLs for each active extension.
	 */
	public static getExtensionsUrls(extensions?: Array<ExtensionModel>): Array<string> | null {
		if (extensions) {
			return extensions.map((extension: ExtensionModel) => {
				return extension.url;
			});
		}
		else {
			return null;
		}
	}
}