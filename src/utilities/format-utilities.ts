import prettyBytes from "pretty-bytes";
import { LocalizationUtilities } from "./localization-utilities";

/**
 * Utility functions for formatting data.
 */
export class FormatUtilities {
	/**
	 * Lookup localized text and get a localized value.
	 */
	public static getText(key: string, placeholderValues?: Array<string>): string {
		return LocalizationUtilities.getLocalizedText("format", key, placeholderValues);
	}
		
	/**
	 * Returns formatted size string with units.
	 */
	public static formatSize(size: number): string {
		return prettyBytes(size);
	}

	/**
	 * Returns formatted date.
	 */
	public static formatDate(dateString: string): string { 
		const date: Date = new Date(dateString);
		const today: Date = new Date();
		const yesterday: number = new Date().setDate(today.getDate() - 1);

		const milliseconds: number = today.getTime() - date.getTime();
		const seconds: number = Math.floor(milliseconds / 1000);
		const minutes: number = Math.floor(seconds / 60);
		const hours: number = Math.floor(minutes / 60);

		const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(
			[], {"year": "numeric", "month": "long", "day": "numeric", "weekday": "short"}
		);

		const timeFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(
			[], {"hour": "numeric", "minute": "numeric"}
		);

		if (seconds < 5) {
			return this.getText("just-now");
		}
		else if (seconds < 60) {
			return this.getText("seconds-ago", [seconds.toString()]);
		}
		else if (minutes === 1) {
			return this.getText("1-minute-ago");
		}
		else if (minutes < 60) {
			return this.getText("minutes-ago", [minutes.toString()]);
		}
		else if (hours === 1) {
			return this.getText("1-hour-ago");
		}
		else if (hours < 1) {
			return this.getText("hours-ago", [hours.toString()]);
		}
		else if (dateFormatter.format(date) === dateFormatter.format(today)) {
			return this.getText("today-at", [timeFormatter.format(date)]);
		}
		else if (dateFormatter.format(date) === dateFormatter.format(yesterday)) {
			return this.getText("yesterday-at", [timeFormatter.format(date)]);
		}
		else {
			return this.getText("at", [dateFormatter.format(date), timeFormatter.format(date)]);
		}
	}
}