import { ref, Ref, watchEffect } from "vue";

/**
 * Utility functions for managing page content.
 */
export class ContentUtilities {
	/**
	 * Returns content refresh state.
	 */
	public static refreshContent: Ref<boolean> = ref(false);

	/**
	 * Triggers a content refresh.
	 */
	public static triggerContentRefresh(): void {
		this.refreshContent.value = true;
		setTimeout(() => {
			this.refreshContent.value = false;
		}, 100);
	}

	/**
	 * Watch for external trigger to refresh the content, and execute the specified callback function when it occurs.
	 */
	public static observeContentRefresh(callback: Function): void {
		watchEffect(() => {
			if (this.refreshContent.value) {
				callback();
			}
		});
	}
}