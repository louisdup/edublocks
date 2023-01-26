import { getAuth, Auth, User, signInWithEmailAndPassword, signOut, UserCredential, AuthError, OAuthProvider, GoogleAuthProvider, initializeAuth, indexedDBLocalPersistence, OAuthCredential, signInWithCredential, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { ref, Ref } from "vue";
import { ContentUtilities } from "./content-utilities";
import { Capacitor } from "@capacitor/core";
import { FirebaseUtilities } from "./firebase-utilities";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";
import * as UsersProvider from "@/data/providers/users-provider";
import router from "@/router";

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
	 * True if the user has verified their email.
	 */
	public static hasVerifiedEmail(): boolean | undefined {
		if (this.currentUser.value) {
			return this.currentUser.value.emailVerified;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Sign in with an email and password, then set the current user instance.
	 */
	public static async signInWithEmailAndPassword(email: string, password: string): Promise<void | AuthError> {
		try {
			const userCredential: UserCredential = await signInWithEmailAndPassword(this.getAuth(), email, password);
			this.currentUser.value = userCredential.user;
			ContentUtilities.triggerContentRefresh();
		}
		catch (error) {
			throw error;
		}
	}

	/**
	 * Sign in with google, then set the current user instance.
	 */
	public static async signInWithGoogle(): Promise<void | AuthError> {
		try {
			const result: any = await FirebaseAuthentication.signInWithGoogle();
			const googleCredential: OAuthCredential = GoogleAuthProvider.credential(result.credential?.idToken);
			const userCredential: UserCredential = await signInWithCredential(this.getAuth(), googleCredential);

			this.currentUser.value = userCredential.user;
			this.shouldRedirectToRegisterPage();
			ContentUtilities.triggerContentRefresh();
		}
		catch (error) {
			throw error;
		}
	}

	/**
	 * Sign in with microsoft, then set the current user instance.
	 */
	public static async signInWithMicrosoft(): Promise<void | AuthError> {
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
	 * Sign in with apple, then set the current user instance.
	 */
	public static async signInWithApple(): Promise<void | AuthError> {
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
	 * Signs the current user out.
	 */
	public static async signOut(): Promise<void> {
		await signOut(this.getAuth());
		this.currentUser.value = null;
		ContentUtilities.triggerContentRefresh();
	}

	/**
	 * Updates the display name of the current user.
	 */
	private static async updateDisplayName(name: string): Promise<void> {
		try {
			if (this.currentUser.value) {
				await updateProfile(this.currentUser.value, {
					displayName: name
				});
			}
		}
		catch (error) {
			throw error;
		}
	}

	/**
	 * Creates a new user record in firestore.
	 */
	private static async createNewUserRecord(user: User, name: string): Promise<void> {
		try {
			const body: object = {
				name,
				email: user.email,
				version: 5,
				uid: user.uid
			};
			await UsersProvider.createUserAsync(user.uid, body);
		}
		catch (error) {
			throw error;
		}
	}

	/**
	 * Sends an email to the current user asking them to verify their email.
	 */
	public static async sendVerificationEmail(user: User): Promise<void> {
		await sendEmailVerification(user);
	}

	/**
	 * Registers a new user with the specified email and password.
	 */
	public static async registerWithEmailAndPassword(email: string, password: string, name: string): Promise<void> {
		try {
			const userCredential: UserCredential = await createUserWithEmailAndPassword(this.getAuth(), email, password);
			await this.createNewUserRecord(userCredential.user, name);
			await this.updateDisplayName(name);
			await this.sendVerificationEmail(userCredential.user);
			this.currentUser.value = userCredential.user;
			ContentUtilities.triggerContentRefresh();
		}
		catch (error) {
			throw error;
		}	
	}

	/**
	 * Redirects the user to the email verification page if they need to verify their email.
	 */
	public static shouldRedirectToRegisterPage(): void {
		if (AuthenticationUtilities.currentUser.value && !this.hasVerifiedEmail()) {
			router.push("/register");
		}
	}
}

