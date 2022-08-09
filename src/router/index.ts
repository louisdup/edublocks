import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import { homeRoutes } from "@/views/home/routes";

const routes: Array<RouteRecordRaw> = [
	...homeRoutes
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;