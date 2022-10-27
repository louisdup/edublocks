import type { RouteRecordRaw } from "vue-router";
import { View } from "@/views/constants";

import Editor from "@/views/editor/editor.vue";

export const editorRoutes: Array<RouteRecordRaw> = [
	{
		path: "/project/new",
		name: View.NewProject,
		component: Editor,
		meta: {
			key: "editor"
		}
	},
	{
		path: "/project/:id",
		name: View.Project,
		component: Editor,
		meta: {
			key: "editor"
		}
	},
];

