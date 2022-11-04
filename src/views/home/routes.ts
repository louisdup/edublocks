import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";
import { View } from "@/views/constants";

export const homeRoutes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: View.Home,
		component: async (): Promise<Component> => {
			return import ("./home.vue");
		},
		meta: {
			key: "home"
		}
	}
];

