import { getAuth, Auth, User, signInWithEmailAndPassword, signOut, UserCredential, AuthError, OAuthProvider, GoogleAuthProvider, initializeAuth, indexedDBLocalPersistence, OAuthCredential, signInWithCredential } from "firebase/auth";
import { ref, Ref } from "vue";
import { ContentUtilities } from "./content-utilities";
import { Capacitor } from "@capacitor/core";
import { FirebaseUtilities } from "./firebase-utilities";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";

/**
 * Utility functions for authentication with firebase.
 */
export class AuthenticationUtilities {
	/**
	 * Returns firebase auth instance.
	 */
	public static getAuth(): Auth {
		if (Capacitor.isNativePlatform()) {
			return initializeAuth(FirebaseUtilities.app, {
				persistence: indexedDBLocalPersistence
			});
		}
		else {
			return getAuth();
		}
	}

	/**
	 * Returns current user instance.
	 */
	public static currentUser: Ref<User | null> = ref(null);

	/**
	 * Login with an email and password, then set the current user instance.
	 */
	public static async loginWithEmailAndPassword(email: string, password: string): Promise<void | AuthError> {
		return signInWithEmailAndPassword(this.getAuth(), email, password).then((user: UserCredential) => {
			this.currentUser.value = user.user;
			ContentUtilities.triggerContentRefresh();
		}).catch((error: AuthError) => {
			throw error;
		});
	}

	/**
	 * Login with google, then set the current user instance.
	 */
	public static async loginWithGoogle(): Promise<void | AuthError> {
		try {
			const result: any = await FirebaseAuthentication.signInWithGoogle();
			const googleCredential: OAuthCredential = GoogleAuthProvider.credential(result.credential?.idToken);
			const userCredential: UserCredential = await signInWithCredential(this.getAuth(), googleCredential);

			this.currentUser.value = userCredential.user;
			ContentUtilities.triggerContentRefresh();
		}
		catch (error) {
			throw error;
		}
	}

	/**
	 * Login with microsoft, then set the current user instance.
	 */
	public static async loginWithMicrosoft(): Promise<void | AuthError> {
		try {
			const result: any = await FirebaseAuthentication.signInWithMicrosoft();
			const microsoftCredential: OAuthCredential = new OAuthProvider("microsoft.com").credential(result.credential?.idToken);
			const userCredential: UserCredential = await signInWithCredential(this.getAuth(), microsoftCredential);

			this.currentUser.value = userCredential.user;
			ContentUtilities.triggerContentRefresh();
		}
		catch (error) {
			throw error;
		}
	}

	/**
	 * Login with apple, then set the current user instance.
	 */
	public static async loginWithApple(): Promise<void | AuthError> {
		try {
			const result: any = await FirebaseAuthentication.signInWithApple();
			const appleCredential: OAuthCredential = new OAuthProvider("apple.com").credential(result.credential?.idToken);
			const userCredential: UserCredential = await signInWithCredential(this.getAuth(), appleCredential);

			this.currentUser.value = userCredential.user;
			ContentUtilities.triggerContentRefresh();
		}
		catch (error) {
			throw error;
		}
	}

	/**
	 * Logout the current user.
	 */
	public static async logout(): Promise<void> {
		await signOut(this.getAuth());
		this.currentUser.value = null;
		ContentUtilities.triggerContentRefresh();
	}
}

