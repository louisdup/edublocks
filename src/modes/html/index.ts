import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { ModeModelBase } from "../base-classes/mode-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { htmlGenerator } from "./generator";
import pretty from "pretty";

// Output Panel Components
import HTMLCode from "./components/output-panel/html-code/html-code.vue";
import Preview from "./components/output-panel/preview/preview.vue";

// Import Toolbox Categories
import page from "./blocks/page/toolbox.xml?raw";
import structure from "./blocks/structure/toolbox.xml?raw";
import text from "./blocks/text/toolbox.xml?raw";
import attributes from "./blocks/attributes/toolbox.xml?raw";
import style from "./blocks/style/toolbox.xml?raw";
import media from "./blocks/media/toolbox.xml?raw";
import forms from "./blocks/forms/toolbox.xml?raw";
import tables from "./blocks/tables/toolbox.xml?raw";
import lists from "./blocks/lists/toolbox.xml?raw";
import script from "./blocks/script/toolbox.xml?raw";

/**
 * Mode model for the HTML mode.
 */
export class HTMLModel extends ModeModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "html";
	}
		
	/**
	 * Returns config/information about the HTML mode.
	 */
	public config: ModeConfigModel = {
		name: "HTML",
		key: "html",
		color: "orange",
		logo: "/images/modes/html/logo.svg",
		image: "/images/modes/html/thumbnail.svg",
		fileExtension: "html"
	};

	/**
	 * Initalize the HTML mode.
	 */
	public init(): void {
		//
	}

	/**
	 * Returns the start block that appears at the top of all HTML code.
	 */
	public startBlock: string = "html";

	/**
	 * Loads block definitions and generators for the HTML mode.
	 */
	public loadBlocks(): Promise<void> {
		return new Promise(async (resolve: VoidFunction) => {
			const commonDefinitions: any = import("./blocks/common/definitions");
			const commonGenerators: any = import("./blocks/common/definitions");

			const deprecatedDefinitions: any = import("./blocks/deprecated/definitions");
			const deprecatedGenerators: any = import("./blocks/deprecated/definitions");

			const pageDefinitions: any = import("./blocks/page/definitions");
			const pageGenerators: any = import("./blocks/page/generators");

			const structureDefinitions: any = import("./blocks/structure/definitions");
			const structureGenerators: any = import("./blocks/structure/generators");

			const textDefinitions: any = import("./blocks/text/definitions");
			const textGenerators: any = import("./blocks/text/generators");

			const attributesDefinitions: any = import("./blocks/attributes/definitions");
			const attributesGenerators: any = import("./blocks/attributes/generators");

			const styleDefinitions: any = import("./blocks/style/definitions");
			const styleGenerators: any = import("./blocks/style/generators");

			const mediaDefinitions: any = import("./blocks/media/definitions");
			const mediaGenerators: any = import("./blocks/media/generators");

			const formsDefinitions: any = import("./blocks/forms/definitions");
			const formsGenerators: any = import("./blocks/forms/generators");

			const tablesDefinitions: any = import("./blocks/tables/definitions");
			const tablesGenerators: any = import("./blocks/tables/generators");

			const listsDefinitions: any = import("./blocks/lists/definitions");
			const listsGenerators: any = import("./blocks/lists/generators");

			const scriptDefinitions: any = import("./blocks/script/definitions");
			const scriptGenerators: any = import("./blocks/script/generators");

			(await commonDefinitions).default();
			(await commonGenerators).default();

			(await deprecatedDefinitions).default();
			(await deprecatedGenerators).default();

			(await pageDefinitions).default();
			(await pageGenerators).default();

			(await structureDefinitions).default();
			(await structureGenerators).default();

			(await textDefinitions).default();
			(await textGenerators).default();

			(await attributesDefinitions).default();
			(await attributesGenerators).default();

			(await styleDefinitions).default();
			(await styleGenerators).default();

			(await mediaDefinitions).default();
			(await mediaGenerators).default();

			(await formsDefinitions).default();
			(await formsGenerators).default();

			(await tablesDefinitions).default();
			(await tablesGenerators).default();

			(await listsDefinitions).default();
			(await listsGenerators).default();

			(await scriptDefinitions).default();
			(await scriptGenerators).default();

			resolve();
		});
	}

	/**
	 * Returns a blockly toolbox for the html mode.
	 */
	 public getToolbox(): Array<String> {
		return [
			page,
			structure, 
			text,
			attributes,
			style,
			media,
			forms,
			tables,
			lists,
			script
		];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Array<EditorButtonModel> = [
		...this.commonHeaderButtons,
		{
			key: "popout",
			icon: ["far", "arrow-up-right-from-square"],
			color: "blue",
			action: (): void => {
				this.openWebsiteInNewWindow();
			}
		}
	];

	/**
	 * Returns a list of tabs to display in the sidebar for HTML.
	 */
	public sidebarTabs: Array<EditorSidebarTabModel> = [
		...this.commonSidebarTabs
	];

	/**
	 * Returns a list of tabs that to display in the output panel for html.
	 */
	public outputPanelTabs: Array<EditorOutputTabModel> = [
		...this.commonOutputPanelTabs,
		{
			key: "preview",
			component: Preview,
			active: true
		},
		{
			key: "code",
			component: HTMLCode
		}
	];

	/**
	 * Returns HTML code from the blockly workspace.
	 */
	public getCodeFromBlocks(): string | undefined {
		if (EditorUtilities.currentProject) {
			return pretty(htmlGenerator.workspaceToCode(EditorUtilities.blocklyInstance), { ocd: true });
		}
		else {
			return undefined;
		}
	}

	/**
	 * Opens the user's "website" in a new window.
	 */
	private openWebsiteInNewWindow(): void {
		if (EditorUtilities.currentProject.value) {
			const newWindow: Window | null = window.open(undefined, undefined, "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=500");
			if (newWindow) {
				newWindow.document.body.innerHTML = EditorUtilities.currentProject.value.code as string;
			}
		}
	}
}

// Export the mode model.
export const html: HTMLModel = new HTMLModel();