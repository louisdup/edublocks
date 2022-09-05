import { GoogleAuthProvider, OAuthProvider } from "@firebase/auth";

/**
 * Data model for a firebase social authentication provider.
 */
export interface SocialAuthProviderModel {
	name: string;
	icon: Array<string>;
	provider: OAuthProvider | GoogleAuthProvider;
}