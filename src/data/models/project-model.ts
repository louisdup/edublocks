import { ModeModelBase } from "@/modes/base-classes/mode-model-base";
import { Ref } from "vue";
import { FirestoreProjectModel } from "./firestore-project-model";

/**
 * Data model for a project.
 */
export interface ProjectModel {
	name: string;
	mode: ModeModelBase;
	type: "blocks" | "text";
	blocks?: string;
	code: Ref<string | undefined>;
	firestore_project?: FirestoreProjectModel;
}