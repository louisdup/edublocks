import { LocalizationUtilities } from "@/utilities/localization-utilities";
import { ScreenUtilities } from "@/utilities/screen-utilities";
import { FormatUtilities } from "@/utilities/format-utilities";
import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import { ModeUtilities } from "@/utilities/mode-utilities";
import { ContentUtilities } from "@/utilities/content-utilities";
import { AuthenticationUtilities } from "@/utilities/authentication-utilities";
import { state } from "@/data/state";
import { EventUtilities } from "@/utilities/event-utilities";

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
	 * True if data layout is list.
	 */
	public isDataLayoutList(): boolean {
		return state.dataLayout === "list";
	}

	/**
	 * True if data layout is list.
	 */
	public isDataLayoutGrid(): boolean {
		return state.dataLayout === "grid";
	}

	/**
	 * Sets the current data layout.
	 */
	public setDataLayout(layout: "list" | "grid"): void {
		state.dataLayout = layout;
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
	 * Returns a mode from its key.
	 */
	public getModeFromKey(key: string): ModeModelBase {
		return ModeUtilities.getModeFromKey(key);
	}

	/**
	 * Returns a list of available modes.
	 */
	public getModes(): Array<ModeModelBase> {
		return ModeUtilities.getModes();
	}

	/**
	 * Called when an element is scrolled.
	 * Takes a percent as a number for a function to be called.
	 */
	public onScroll(event: Event, percentageTrigger: number, action: VoidFunction): void {
		EventUtilities.onScroll(event, percentageTrigger, action);
	}
}