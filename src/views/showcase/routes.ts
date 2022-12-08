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
	},
	{
		path: "/showcase/:id",
		name: View.ShowcaseProjectDetail,
		component: async (): Promise<Component> => {
			return import ("./showcase-project-detail/showcase-project-detail.vue");
		},
		meta: {
			key: "showcase"
		}
	}
];

