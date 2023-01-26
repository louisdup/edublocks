import { initializeAppCheck, ReCaptchaV3Provider } from "@firebase/app-check";
import { FirebaseUtilities } from "./firebase-utilities";

/**
 * Utility functions for firebase app check.
 */
export class AppCheckUtilities {
	/**
	 * Initialize firebase app check.
	 */
	public static initializeAppCheck(): void {
		initializeAppCheck(FirebaseUtilities.app, {
			provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_KEY)
		});
	}
}

