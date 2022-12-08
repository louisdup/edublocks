import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";

export const notFoundRoutes: Array<RouteRecordRaw> = [
	{
		path: "/:pathMatch(.*)",
		component: async (): Promise<Component> => {
			return import ("./not-found.vue");
		}
	},
];

