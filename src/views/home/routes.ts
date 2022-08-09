import type { RouteRecordRaw } from "vue-router";
import { View } from "@/views/constants";

import Home from "@/views/home/home.vue";

export const homeRoutes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: View.Home,
		component: Home,
		meta: {
			key: "home"
		}
	}
];

