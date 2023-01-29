import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import { FirestoreProjectModel } from "./firestore-project-model";
import { LearnGuideModel } from "./learn-guide-model";

/**
 * Data model for a project.
 */
export interface ProjectModel {
	name: string;
	mode: ModeModelBase;
	type: "blocks" | "text";
	blocks?: string;
	code?: string;
	readOnly?: boolean;
	firestoreProject?: FirestoreProjectModel;
	learnGuide?: LearnGuideModel;
}