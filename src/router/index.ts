import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			key: "home"
		}
	},
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;