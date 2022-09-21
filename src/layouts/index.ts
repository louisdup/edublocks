import { App } from "vue";
import { LayoutName } from "./constants";

import DesktopLayout from "./desktop-layout/desktop-layout.vue";
import MobileLayout from "./mobile-layout/mobile-layout.vue";
import EditorDesktopLayout from "./editor-desktop-layout/editor-desktop-layout.vue";
import EditorMobileLayout from "./editor-mobile-layout/editor-mobile-layout.vue";

/**
 * Export & install layouts for use globally
 */
export default {
	install(app: App): void {
		app.component(LayoutName.DesktopLayout, DesktopLayout);
		app.component(LayoutName.MobileLayout, MobileLayout);
		app.component(LayoutName.EditorDesktopLayout, EditorDesktopLayout);
		app.component(LayoutName.EditorMobileLayout, EditorMobileLayout);
	}
};