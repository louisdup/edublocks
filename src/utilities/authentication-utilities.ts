import { AuthError, GoogleAuthProvider, OAuthProvider } from "@firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { ref, Ref } from "vue";
import { md5 } from "md5js";
import { SocialAuthProviderModel } from "@/data/models/social-auth-provider-model";

/**
 * Utility functions for authentication with firebase.
 */
export class AuthenticationUtilities {
	/**
	 * Returns firebase auth instance.
	 */
	public static auth(): firebase.auth.Auth {
		return firebase.auth();
	}

	/**
	 * Returns current user instance.
	 */
	public static currentUser: Ref<firebase.User | null> = ref(null);

	/**
	 * Login with an email and password, then set the current user instance.
	 */
	public static async loginWithEmailAndPassword(email: string, password: string): Promise<void | AuthError> {
		return this.auth().signInWithEmailAndPassword(email, password).then((user: firebase.auth.UserCredential) => {
			this.currentUser.value = user.user;
		}).catch((error: AuthError) => {
			throw error;
		});
	}

	/**
	 * Login with an a social auth provider, then set the current user instance.
	 */
	public static async loginWithSocialAuthProvider(provider: OAuthProvider | GoogleAuthProvider): Promise<void | AuthError> {
		return this.auth().signInWithPopup(provider).then((user: firebase.auth.UserCredential) => {
			this.currentUser.value = user.user;
		}).catch((error: AuthError) => {
			throw error;
		});
	}

	/**
	 * Logout the current user.
	 */
	public static async logout(): Promise<void> {
		await this.auth().signOut();
		this.currentUser.value = null;
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

