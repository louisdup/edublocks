import type { RouteRecordRaw } from "vue-router";
import { View } from "@/views/constants";

import Projects from "@/views/projects/projects.vue";

export const projectsRoutes: Array<RouteRecordRaw> = [
	{
		path: "/projects",
		name: View.Projects,
		component: Projects,
		meta: {
			key: "projects"
		}
	}
];

