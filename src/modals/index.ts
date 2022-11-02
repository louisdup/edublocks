import { App } from "vue";
import { ModalName } from "./constants";

import CreateProject from "./create-project/create-project.vue";
import DeleteProject from "./delete-project/delete-project.vue";
import RenameProject from "./rename-project/rename-project.vue";
import ShareProject from "./share-project/share-project.vue";
import DeleteShowcaseProject from "./delete-showcase-project/delete-showcase-project.vue";
import Error from "./error/error.vue";
import Login from "./login/login.vue";
import ConnectMicrobit from "./connect-microbit/connect-microbit.vue";
import Progress from "./progress/progress.vue";

/**
 * Export & install modals for use globally
 */
export default {
	install(app: App): void {
		app.component(ModalName.CreateProject, CreateProject);
		app.component(ModalName.DeleteProject, DeleteProject);
		app.component(ModalName.RenameProject, RenameProject);
		app.component(ModalName.ShareProject, ShareProject);
		app.component(ModalName.DeleteShowcaseProject, DeleteShowcaseProject);
		app.component(ModalName.Error, Error);
		app.component(ModalName.Login, Login);
		app.component(ModalName.ConnectMicrobit, ConnectMicrobit);
		app.component(ModalName.Progress, Progress);
	}
};