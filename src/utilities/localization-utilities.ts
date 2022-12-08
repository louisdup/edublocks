import { EbSelectOption } from "@/components/eb-select/eb-select-types";
import { state } from "@/data/state";

/**
 * Utility functions for localization.
 */
export class LocalizationUtilities {
	/**
	 * Lookup localized text and get a localized value.
	 */
	public static getText(key: string, placeholderValues?: Array<string>): string {
		return this.getLocalizedText("localization", key, placeholderValues);
	}
		
	/**
	 * Returns a list of supported languages.
	 */ 
	public static supportedLanguages: Array<string> = ["en", "fr"];

	/**
	 * Stores language resource strings for localization.
	 */
	private static textLookupTable: Record<string, string> = {};

	/**
	 * Remaps the list of supported languages for displaying in a select box.
	 */
	public static remapSupportedLanguagesForSelect(): Array<EbSelectOption> {
		return this.supportedLanguages.map((language: string) => {
			return {
				label: this.getText(language),
				value: language
			};
		});
	}

	/**
	 * Take namespace for view/component and key to return a translated value from the lookup table.
	 */
	public static getLocalizedText(namespace: string, key: string, placeholderValues?: Array<string>): string {
		const target: string = `${namespace}.${key}`;
		let result: string = "";

		if (this.textLookupTable[namespace]) {
			result = this.textLookupTable[namespace][key];
			// Iterate through placeholder values and replace them in the result string.
			if (placeholderValues) {
				placeholderValues.forEach((placeholder: string, index: number) => {
					result = result.replace(`{${index+1}}`, placeholder);
				});
			}
		
			if (!this.textLookupTable[namespace][key]) {
				return `!! ${target} !!`;
			}
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

		let preferredLanguage: string = defaultLanguage;

		if (this.supportedLanguages.includes(state.language)) {
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