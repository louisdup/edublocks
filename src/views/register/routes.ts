import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";
import { View } from "../constants";

export const registerRoutes: Array<RouteRecordRaw> = [
	{
		path: "/register",
		name: View.Register,
		component: async (): Promise<Component> => {
			return import ("./register.vue");
		},
		meta: {
			key: "register"
		}
	}
];

