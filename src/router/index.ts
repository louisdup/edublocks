import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import { homeRoutes } from "@/views/home/routes";
import { editorRoutes } from "@/views/editor/routes";
import { projectsRoutes } from "@/views/projects/routes";
import { showcaseRoutes } from "@/views/showcase/routes";
import { learnRoutes } from "@/views/learn/routes";
import { classroomRoutes } from "@/views/classroom/routes";
import { settingsRoutes } from "@/views/settings/routes";
import { registerRoutes } from "@/views/register/routes";
import { notFoundRoutes } from "@/views/not-found/routes";

const routes: Array<RouteRecordRaw> = [
	...homeRoutes,
	...editorRoutes,
	...projectsRoutes,
	...showcaseRoutes,
	...learnRoutes,
	...classroomRoutes,
	...registerRoutes,
	...settingsRoutes,
	...notFoundRoutes
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;