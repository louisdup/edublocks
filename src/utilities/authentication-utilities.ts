import { getAuth, Auth, User, signInWithEmailAndPassword, signInWithPopup, signOut, UserCredential, AuthError, OAuthProvider, GoogleAuthProvider, initializeAuth, indexedDBLocalPersistence } from "firebase/auth";
import { ref, Ref } from "vue";
import { md5 } from "md5js";
import { SocialAuthProviderModel } from "@/data/models/social-auth-provider-model";
import { ContentUtilities } from "./content-utilities";
import { Capacitor } from "@capacitor/core";
import { FirebaseUtilities } from "./firebase-utilities";

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
	 * Login with an a social auth provider, then set the current user instance.
	 */
	public static async loginWithSocialAuthProvider(provider: OAuthProvider | GoogleAuthProvider): Promise<void | AuthError> {
		return signInWithPopup(this.getAuth(), provider).then((user: UserCredential) => {
			this.currentUser.value = user.user;
			ContentUtilities.triggerContentRefresh();
		}).catch((error: AuthError) => {
			throw error;
		});
	}

	/**
	 * Logout the current user.
	 */
	public static async logout(): Promise<void> {
		await signOut(this.getAuth());
		this.currentUser.value = null;
		ContentUtilities.triggerContentRefresh();
	}

	/**
	 * Returns a list of social authentication providers.
	 */
	public static socialAuthProviders: Array<SocialAuthProviderModel> = [
		{
			name: "Google",
			icon: ["fab", "google"],
			provider: new GoogleAuthProvider
		},
		{
			name: "Microsoft",
			icon: ["fab", "microsoft"],
			provider: new OAuthProvider("microsoft.com")
		},
		{
			name: "Apple",
			icon: ["fab", "apple"],
			provider: new OAuthProvider("apple.com")
		},
	];

	/**
	 * Returns a profile picture for the current user from gravatar.
	 */
	public static getCurrentUserProfilePicture(): string | undefined {
		if (this.currentUser.value && this.currentUser.value.email) {
			return `https://secure.gravatar.com/avatar/${md5(this.currentUser.value.email, 32)}?d=mp`;
		}
		else {
			return undefined;
		}
	}
}

