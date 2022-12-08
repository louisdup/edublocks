import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import { homeRoutes } from "@/views/home/routes";
import { projectsRoutes } from "@/views/projects/routes";
import { editorRoutes } from "@/views/editor/routes";
import { classroomRoutes } from "@/views/classroom/routes";
import { showcaseRoutes } from "@/views/showcase/routes";
import { notFoundRoutes } from "@/views/not-found/routes";

const routes: Array<RouteRecordRaw> = [
	...homeRoutes,
	...projectsRoutes,
	...editorRoutes,
	...classroomRoutes,
	...showcaseRoutes,
	...notFoundRoutes
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;