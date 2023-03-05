import { ref, Ref } from "vue";
import { EbToastNotificationContent } from "@/components/eb-toast-notification/eb-toast-notification-types";

/**
 * Utility functions for toast notification.
 */
export class ToastUtilities {
	/**
	 * Returns content for the toast notification.
	 */
	public static notification: Ref<EbToastNotificationContent | undefined> = ref();

	/**
	 * Sets the content of the toast notification.
	 */
	public static showNotification(content: EbToastNotificationContent): void {
		this.notification.value = undefined;
		
		this.notification.value = content;

		setTimeout(() => {
			this.notification.value = undefined;
		}, 3000);
	} 
}