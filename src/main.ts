import { ComponentPublicInstance, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
import "@/data/state/state";
import components from "./components";
import layouts from "./layouts";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

// Import providers
import "@/data/providers/icon-provider";
import { ScreenUtilities } from "./utilities/screen-utilities";
import { LocalizationUtilities } from "./utilities/localization-utilities";

let app: ComponentPublicInstance | undefined;

function startApplication(): void {
	// Setup event listener that fires on screen size change to determine current layout for views.
	ScreenUtilities.listenForScreenSizeChange();

	app = createApp(App)
		.use(router)
		.use(components)
		.use(layouts)
		.use(autoAnimatePlugin)
		.mount("#app");
}

// Load language file for localization and start application.
LocalizationUtilities.loadPreferredLanguageAsync().then(() => {
	startApplication();
});
