import { getAuth, Auth, User, signInWithEmailAndPassword, UserCredential, AuthError } from "firebase/auth";
import { ref, Ref } from "vue";

/**
 * Utility functions for authentication with firebase.
 */
export class AuthenticationUtilities {
	/**
	 * Returns firebase auth instance.
	 */
	public static auth(): Auth {
		return getAuth();
	}

	/**
	 * Returns current user instance.
	 */
	public static currentUser: Ref<User | undefined> = ref();

	/**
	 * Login with an email and password, then set the current user instance.
	 */
	public static async loginWithEmailAndPassword(email: string, password: string): Promise<void | AuthError> {
		return signInWithEmailAndPassword(this.auth(), email, password).then((userCredential: UserCredential) => {
			this.currentUser.value = userCredential.user;
		}).catch((error: AuthError) => {
			throw error;
		});
	}
}