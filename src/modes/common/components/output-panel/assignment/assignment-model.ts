import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { reactive } from "vue";
import { AssignmentState } from "./assignment-state";
import * as ClassroomProvider from "@/data/providers/classroom-provider";
import { FirestoreFetchResponseModel } from "@/data/models/firestore-fetch-response-model";
import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { FormatUtilities } from "@/utilities/format-utilities";

/**
 * Component model for the assignment output panel component.
 */
class AssignmentDetailsModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "assignment";
	}

	/**
	 * Reactive instance of the component state.
	 */
	public state: AssignmentState = reactive(new AssignmentState());

	/**
	 * Initialise the component model.
	 */
	public init(): void {
		// Load the initial data.
		this.loadInitialData();
	}
		
	/**
	 * Load the initial set of data required by the component.
	 */
	private async loadInitialData(): Promise<void> {
		await this.loadAssignment();
	}
	
	/**
	 * Loads the requested assignment.
	 */
	private async loadAssignment(): Promise<void> {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.firestoreProject && EditorUtilities.currentProject.value.firestoreProject.assignment) {
			this.state.isLoadingAssignment = true;
		
			await ClassroomProvider.getAssignmentAsync(EditorUtilities.currentProject.value.firestoreProject.assignment.classroom, EditorUtilities.currentProject.value.firestoreProject.assignment.id).then((response: FirestoreFetchResponseModel<ClassroomAssignmentModel>) => {
				if (response.wasSuccessful && response.data) {
					this.state.assignment = response.data;
				}
				this.state.isLoadingAssignment = false;
			});
		}
	}

	/**
	 * Returns the name of the assignment.
	 */
	public getAssignmentName(): string | undefined {
		if (this.state.assignment) {
			return this.state.assignment.name;
		}
		else {
			return undefined;
		}
	}

	/**
	 * Returns the due date of the assignment.
	 */
	public getAssignmentDueDate(): string | undefined {
		if (this.state.assignment) {
			return this.getText("due", [FormatUtilities.formatDate(this.state.assignment.due)]);
		}
		else {
			return undefined;
		}
	}

	/**
	 * True if the assignment is currently loading.
	 */
	public isLoadingVisible(): boolean {
		return this.state.isLoadingAssignment;
	}
}

// Export the component model
export const component: AssignmentDetailsModel = new AssignmentDetailsModel();