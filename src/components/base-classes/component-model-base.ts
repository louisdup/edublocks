import { ContentUtilities } from "@/utilities/content-utilities";
import { LocalizationUtilities } from "@/utilities/localization-utilities";

/**
 * Base class exposing common functionality to all component models.
 */
export abstract class ComponentModelBase {
	/**
	 * Return the string that is used for the localization namespace when getting localized text for the component.
	 * This is an abstract property that needs to be defined in the component model that extends this base class.
	 */
	protected abstract getLocalizationNamespace(): string;

	/**
	 * Watch for external trigger to refresh the content, and execute the specified callback function when it occurs.
	 */
	protected observeContentRefresh(callback: Function): void {
		ContentUtilities.observeContentRefresh(callback);
	}
	
	/**
	 * Triggers a content refresh.
	 */
	protected triggerContentRefresh(): void {
		ContentUtilities.triggerContentRefresh();
	}

	/**
	 * Uses the specified key (and value of the 'localizationNamespace' property) to lookup localized text for displaying in the component.
	 */
	public getText(key: string, placeholderValues?: Array<string>): string {
		return LocalizationUtilities.getLocalizedText(this.getLocalizationNamespace(), key, placeholderValues);
	}
}