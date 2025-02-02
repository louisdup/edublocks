import { App } from "vue";
import { ModalName } from "./constants";

import CreateProject from "./create-project/create-project.vue";
import DeleteProject from "./delete-project/delete-project.vue";
import RenameProject from "./rename-project/rename-project.vue";
import ShareProject from "./share-project/share-project.vue";
import PublishToShowcase from "./publish-to-showcase/publish-to-showcase.vue";
import UnpublishShowcaseProject from "./unpublish-showcase-project/unpublish-showcase-project.vue";
import Error from "./error/error.vue";
import SignIn from "./sign-in/sign-in.vue";
import ConnectMicrobit from "./connect-microbit/connect-microbit.vue";
import Progress from "./progress/progress.vue";
import CreateAssignment from "./create-assignment/create-assignment.vue";
import SubmitAssignment from "./submit-assignment/submit-assignment.vue";
import UnsubmitAssignment from "./unsubmit-assignment/unsubmit-assignment.vue";
import DeleteAssignment from "./delete-assignment/delete-assignment.vue";
import AssignmentTeacherFeedback from "./assignment-teacher-feedback/assignment-teacher-feedback.vue";
import DeleteClassroom from "./delete-classroom/delete-classroom.vue";
import AddClassroomUsers from "./add-classroom-users/add-classroom-users.vue";
import RemoveClassroomUser from "./remove-classroom-user/remove-classroom-user.vue";
import JoinClassroom from "./join-classroom/join-classroom.vue";
import CreateClassroom from "./create-classroom/create-classroom.vue";
import ConnectRaspberryPi from "./connect-raspberry-pi/connect-raspberry-pi.vue";

/**
 * Export & install modals for use globally
 */
export default {
	install(app: App): void {
		app.component(ModalName.CreateProject, CreateProject);
		app.component(ModalName.DeleteProject, DeleteProject);
		app.component(ModalName.RenameProject, RenameProject);
		app.component(ModalName.ShareProject, ShareProject);
		app.component(ModalName.PublishToShowcase, PublishToShowcase);
		app.component(ModalName.UnpublishShowcaseProject, UnpublishShowcaseProject);
		app.component(ModalName.Error, Error);
		app.component(ModalName.SignIn, SignIn);
		app.component(ModalName.ConnectMicrobit, ConnectMicrobit);
		app.component(ModalName.Progress, Progress);
		app.component(ModalName.CreateAssignment, CreateAssignment);
		app.component(ModalName.SubmitAssignment, SubmitAssignment);
		app.component(ModalName.UnsubmitAssignment, UnsubmitAssignment);
		app.component(ModalName.DeleteAssignment, DeleteAssignment);
		app.component(ModalName.AssignmentTeacherFeedback, AssignmentTeacherFeedback);
		app.component(ModalName.DeleteClassroom, DeleteClassroom);
		app.component(ModalName.AddClassroomUsers, AddClassroomUsers);
		app.component(ModalName.RemoveClassroomUser, RemoveClassroomUser);
		app.component(ModalName.JoinClassroom, JoinClassroom);
		app.component(ModalName.CreateClassroom, CreateClassroom);
		app.component(ModalName.ConnectRaspberryPi, ConnectRaspberryPi);
	}
};