import { App } from "vue";
import { LayoutName } from "./constants";

import DesktopLayout from "./desktop-layout/desktop-layout.vue";

/**
 * Export & install layouts for use globally
 */
export default {
	install(app: App): void {
		app.component(LayoutName.DesktopLayout, DesktopLayout);
	}
};