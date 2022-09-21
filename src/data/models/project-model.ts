import { PlatformModelBase } from "@/platforms/base-classes/platform-model-base";
import { Ref } from "vue";
import { FirestoreProjectModel } from "./firestore-project-model";

/**
 * Data model for a project.
 */
export interface ProjectModel {
	name: string;
	platform: PlatformModelBase;
	type: "blocks" | "text";
	blocks?: string;
	code: Ref<string | undefined>;
	firestore_project?: FirestoreProjectModel;
}