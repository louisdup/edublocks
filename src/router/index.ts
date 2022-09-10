import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import { homeRoutes } from "@/views/home/routes";
import { projectsRoutes } from "@/views/projects/routes";

const routes: Array<RouteRecordRaw> = [
	...homeRoutes,
	...projectsRoutes
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;