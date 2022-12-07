import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";
import { View } from "@/views/constants";

export const showcaseRoutes: Array<RouteRecordRaw> = [
	{
		path: "/showcase",
		name: View.Showcase,
		component: async (): Promise<Component> => {
			return import ("./showcase/showcase.vue");
		},
		meta: {
			key: "showcase"
		}
	}
];

