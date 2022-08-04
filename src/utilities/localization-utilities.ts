import { state } from "@/data/state/state";

/**
 * Utility functions for localization.
 */
export class LocalizationUtilities {
	/**
	 * Stores language resource strings for localization.
	 */
	private static textLookupTable: Record<string, string> = {};

	/**
	 * Take namespace for view/component and key to return a translated value from the lookup table.
	 */
	public static getLocalizedText(namespace: string, key: string): string {
		const target: string = `${namespace}.${key}`;
		const result: string = this.textLookupTable[target];

		if (result === undefined || result === null)	{
			return `!! ${target} !!`;
		}

		return result;
	}

	/**
	 * Merge a new selected languages' strings into the lookup table.
	 */
	private static mergeNewLanguage(data: Record<string, string>): void {
		for (const key of Object.keys(data)) {
			this.textLookupTable[key] = data[key];
		}
	}

	/**
	 * Load a new language from its JSON file.
	 */
	private static async loadLanguage(code: string): Promise<Record<string, string>> {
		let result: Record<string, string> = {};

		const response: Response = await fetch(`/languages/${code}.json`);

		if (response.ok) {
			result = await response.json() as Record<string, string>;
		}

		return result;
	}

	/**
	 * Load and set a new language.
	 */
	public static async loadPreferredLanguageAsync(): Promise<boolean> {
		const defaultLanguage: string = "en";

		if (localStorage.getItem("language")) {
			state.language = localStorage.getItem("language") as string;
		}

		const supportedLanguages: Array<string> = ["en", "fr"];

		let preferredLanguage: string = defaultLanguage;

		if (supportedLanguages.includes(state.language)) {
			preferredLanguage = state.language;
		}

		this.textLookupTable = await this.loadLanguage(defaultLanguage);

		if (preferredLanguage !== defaultLanguage) {
			const alternativeLanguageData: Record<string, string> = await this.loadLanguage(preferredLanguage);
			this.mergeNewLanguage(alternativeLanguageData);
		}

		return true;
	}
}