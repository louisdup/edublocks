import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";
import { View } from "@/views/constants";

export const learnRoutes: Array<RouteRecordRaw> = [
	{
		path: "/learn",
		name: View.Learn,
		component: async (): Promise<Component> => {
			return import ("./learn.vue");
		},
		meta: {
			key: "learn"
		}
	}
];

