import { ProjectModel } from "@/data/models/project-model";
import { ref, Ref } from "vue";

/**
 * Utility functions for the editor.
 */
export class EditorUtilities {
	/**
	 * Returns the current project loaded in the editor.
	 */
	public static currentProject: Ref<ProjectModel | undefined> = ref(undefined);

	/**
	 * Returns the editor blockly instance.
	 */
	public static blocklyInstance: Blockly.WorkspaceSvg | undefined;

	/**
	 * True if the output panel is expanded.
	 */
	public static isOutputPanelExpanded: Ref<boolean> = ref(false);

	/**
	 * Sets the value of the current project.
	 */
	public static setCurrentProject(project: ProjectModel): void {
		this.currentProject.value = project;
	}

	/**
	 * True if current project is defined.
	 */
	public static isCurrentModeSet(): boolean {
		 return this.currentProject.value ? true : false;
	}
}