import { App } from "vue";
import { LayoutName } from "./constants";

import DesktopLayout from "./desktop-layout/desktop-layout.vue";
import MobileLayout from "./mobile-layout/mobile-layout.vue";

/**
 * Export & install layouts for use globally
 */
export default {
	install(app: App): void {
		app.component(LayoutName.DesktopLayout, DesktopLayout);
		app.component(LayoutName.MobileLayout, MobileLayout);
	}
};