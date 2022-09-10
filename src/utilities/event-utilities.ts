/**
 * Utility functions for handling events.
 */
export class EventUtilities {
	/**
	 * Called when an element is scrolled.
	 * Takes a percent as a number for a function to be called.
	 */
	public static onScroll(event: Event, percentageTrigger: number, action: VoidFunction): void {
		const targetElement: HTMLBodyElement = event.target as HTMLBodyElement;
		const scrollPercentage: number = Math.round((targetElement.scrollTop + document.body.scrollTop) / (targetElement.scrollHeight - targetElement.clientHeight) * 100);
		if (scrollPercentage >= percentageTrigger) {
			action();
		}
	}
}