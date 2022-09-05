import { LocalizationUtilities } from "@/utilities/localization-utilities";
import { ScreenUtilities } from "@/utilities/screen-utilities";
import { FormatUtilities } from "@/utilities/format-utilities";
import { PlatformModelBase } from "@/platforms/base-classes/platform-model-base";
import { PlatformUtilities } from "@/utilities/platform-utilities";

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
	public getText(key: string, placeholderValues?: Array<string>): string {
		return LocalizationUtilities.getLocalizedText(this.getLocalizationNamespace(), key, placeholderValues);
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

	/**
	 * Returns formatted size string with units.
	 */
	public formatSize(size: number): string {
		return FormatUtilities.formatSize(size);
	}

	/**
	 * Returns formatted date.
	 */
	public formatDate(date: string): string {
		return FormatUtilities.formatDate(date);
	}

	/**
	 * Returns a platform from its key.
	 */
	public getPlatformFromKey(key: string): PlatformModelBase {
		return PlatformUtilities.getPlatformFromKey(key);
	}
}