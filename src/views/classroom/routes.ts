import type { RouteRecordRaw } from "vue-router";
import { Component } from "vue";
import { View } from "@/views/constants";

export const classroomRoutes: Array<RouteRecordRaw> = [
	{
		path: "/classroom",
		name: View.ClassroomList,
		component: async (): Promise<Component> => {
			return import ("./classroom-list/classroom-list.vue");
		},
		meta: {
			key: "classroom"
		}
	},
	{
		path: "/classroom/:id",
		name: View.ClassroomDetail,
		component: async (): Promise<Component> => {
			return import ("./classroom-detail/classroom-detail.vue");
		},
		meta: {
			key: "classroom"
		}
	},
	{
		path: "/classroom/:classroomId/assignment/:assignmentId/submissions",
		name: View.AssignmentSubmissions,
		component: async (): Promise<Component> => {
			return import ("./assignment-submissions/assignment-submissions.vue");
		},
		meta: {
			key: "classroom"
		}
	},
	{
		path: "/classroom/:id/join",
		name: View.JoinClassroom,
		component: async (): Promise<Component> => {
			return import ("./join-classroom/join-classroom.vue");
		},
		meta: {
			key: "classroom"
		}
	}
];

