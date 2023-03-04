import { RouteRecordRaw } from "vue-router";
import { Component } from "vue";
import { View } from "@/views/constants";

export const userUpgradeRoutes: Array<RouteRecordRaw> = [
	{
		path: "/upgrade",
		name: View.UserUpgrade,
		component: async (): Promise<Component> => {
			return import ("./user-upgrade.vue");
		},
		meta: {
			key: "user-upgrade"
		}
	}
];

