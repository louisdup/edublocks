import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";
import { View } from "@/views/constants";

export const projectsRoutes: Array<RouteRecordRaw> = [
	{
		path: "/projects",
		name: View.Projects,
		component: async (): Promise<Component> => {
			return import ("./projects.vue");
		},
		meta: {
			key: "projects"
		}
	}
];

