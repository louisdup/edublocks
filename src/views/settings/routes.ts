import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";
import { View } from "@/views/constants";

export const settingsRoutes: Array<RouteRecordRaw> = [
	{
		path: "/settings",
		name: View.Settings,
		component: async (): Promise<Component> => {
			return import ("./settings.vue");
		},
		meta: {
			key: "settings"
		}
	}
];

