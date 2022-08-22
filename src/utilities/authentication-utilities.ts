import { AuthError } from "@firebase/auth";
import firebase from "firebase/compat/app";
import { ref, Ref } from "vue";

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
}