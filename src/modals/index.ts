import { App } from "vue";
import { ModalName } from "./constants";

import DeleteProject from "./delete-project/delete-project.vue";
import RenameProject from "./rename-project/rename-project.vue";
import DeleteShowcaseProject from "./delete-showcase-project/delete-showcase-project.vue";
import Error from "./error/error.vue";
import Login from "./login/login.vue";

/**
 * Export & install modals for use globally
 */
export default {
	install(app: App): void {
		app.component(ModalName.DeleteProject, DeleteProject);
		app.component(ModalName.RenameProject, RenameProject);
		app.component(ModalName.DeleteShowcaseProject, DeleteShowcaseProject);
		app.component(ModalName.Error, Error);
		app.component(ModalName.Login, Login);
	}
};