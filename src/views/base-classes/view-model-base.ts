import { LocalizationUtilities } from "@/utilities/localization-utilities";
import { ScreenUtilities } from "@/utilities/screen-utilities";
import { FormatUtilities } from "@/utilities/format-utilities";
import { PlatformModelBase } from "@/platforms/base-classes/platform-model-base";
import { PlatformUtilities } from "@/utilities/platform-utilities";
import { ContentUtilities } from "@/utilities/content-utilities";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";

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
	 * True if screen size is mobile.
	 */
	protected showMobileTemplate(): boolean {
		return ScreenUtilities.isMobile();
	}
	
	/**
	 * True if screen size is desktop.
	 */
	protected showDesktopTemplate(): boolean {
		return ScreenUtilities.isDesktop();
	}

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
	 * Uses the specified key (and value of the 'localizationNamespace' property) to lookup localized text for displaying in the view.
	 */
	public getText(key: string, placeholderValues?: Array<string>): string {
		return LocalizationUtilities.getLocalizedText(this.getLocalizationNamespace(), key, placeholderValues);
	}

	/**
	 * True if the current user is logged in.
	 */
	public isCurrentUserLoggedIn(): boolean {
		return AuthenticationUtilities.currentUser.value ? true : false;
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