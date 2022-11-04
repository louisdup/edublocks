import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";
import { View } from "@/views/constants";

export const editorRoutes: Array<RouteRecordRaw> = [
	{
		path: "/project/new",
		name: View.NewProject,
		component: async (): Promise<Component> => {
			return import ("./editor.vue");
		},
		meta: {
			key: "editor"
		}
	},
	{
		path: "/project/:userId/:projectId",
		name: View.Project,
		component: async (): Promise<Component> => {
			return import ("./editor.vue");
		},
		meta: {
			key: "editor"
		}
	},
];

