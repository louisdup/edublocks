import { App } from "vue";
import { ModalName } from "./constants";

import DeleteProject from "./delete-project/delete-project.vue";
import DeleteShowcaseProject from "./delete-showcase-project/delete-showcase-project.vue";

/**
 * Export & install modals for use globally
 */
export default {
	install(app: App): void {
		app.component(ModalName.DeleteProject, DeleteProject);
		app.component(ModalName.DeleteShowcaseProject, DeleteShowcaseProject);
	}
};