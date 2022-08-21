import firebase from "firebase/compat/app";

/**
 * Data model for a showcase project.
 */
export interface ShowcaseProjectModel {
	id: string;
	title: string;
	description: string;
	image: string;
	uid: string;
	projectURL: string;
	cloneURL: string;
	platform: string;
	created: firebase.firestore.Timestamp;
}