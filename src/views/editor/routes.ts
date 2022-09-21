import type { RouteRecordRaw } from "vue-router";
import { View } from "@/views/constants";

import Editor from "@/views/editor/editor.vue";

export const editorRoutes: Array<RouteRecordRaw> = [
	{
		path: "/editor",
		name: View.Editor,
		component: Editor,
		meta: {
			key: "editor"
		}
	}
];

