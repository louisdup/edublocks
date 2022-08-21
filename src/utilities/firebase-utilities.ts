import { FirebaseOptions } from "@firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

/**
 * Utility functions for firebase.
 */
export class FirebaseUtilities {
	/**
	 * Define config options for firebase app.
	 */
	public static config: FirebaseOptions = {
		apiKey: import.meta.env.VITE_API_KEY as string,
		authDomain: import.meta.env.VITE_AUTH_DOMAIN as string,
		databaseURL: import.meta.env.VITE_DATABASE_URL as string,
		projectId: import.meta.env.VITE_PROJECT_ID as string,
		storageBucket: import.meta.env.VITE_STORAGE_BUCKET as string,
		messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID as string,
		appId: import.meta.env.VITE_APP_ID as string,
		measurementId: import.meta.env.VITE_MEASUREMENT_ID as string
	};

	/**
	 * Initalize firebase app.
	 */
	public static initalizeFirebase(): void {
		firebase.initializeApp(FirebaseUtilities.config);
	}
}

