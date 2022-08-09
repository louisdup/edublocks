import { LocalizationUtilities } from "@/utilities/localization-utilities";
import { PropUtilities } from "@/utilities/prop-utilities";
import { ScreenUtilities } from "@/utilities/screen-utilities";

/**
 * Base class exposing common functionality to all view models.
 */
export abstract class ViewModelBase {
	/**
	 * Return the string that is used for the localization namespace when getting localized text for the view.
	 * This is an abstract property that needs to be defined in the view model that extends this base class.
	 */
	protected abstract getLocalizationNamespace(): string;

	/**
	 * Uses the specified key (and value of the 'localizationNamespace' property) to lookup localized text for displaying in the view.
	 */
	public getText(key: string): string {
		return LocalizationUtilities.getLocalizedText(this.getLocalizationNamespace(), key);
	}

	/**
	 * True if screen size is mobile.
	 */
	public showMobileTemplate(): boolean {
		return ScreenUtilities.isMobile();
	}
	
	/**
	 * True if screen size is desktop.
	 */
	public showDesktopTemplate(): boolean {
		return ScreenUtilities.isDesktop();
	}
}