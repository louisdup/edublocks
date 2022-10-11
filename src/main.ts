import { ComponentPublicInstance, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
import "@/data/state";
import components from "./components";
import layouts from "./layouts";
import modals from "./modals";

// Import third-party plugins
import firebase from "firebase/compat/app";
import "@splidejs/vue-splide/css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import providers
import "@/data/providers/icon-provider";
import { ScreenUtilities } from "./utilities/screen-utilities";
import { LocalizationUtilities } from "./utilities/localization-utilities";
import { AuthenticationUtilities } from "./utilities/authentication-utilities";
import { FirebaseUtilities } from "./utilities/firebase-utilities";

let app: ComponentPublicInstance | undefined;

function startApplication(): void {
	// Setup event listener that fires on screen size change to determine current layout for views.
	ScreenUtilities.listenForScreenSizeChange();

	app = createApp(App)
		.use(router)
		.use(components)
		.use(modals)
		.use(layouts)
		.component("font-awesome-icon", FontAwesomeIcon)
		.mount("#app");
}

// Setup firebase & vue app.
function setupApplication(): void {
	// Initialize firebase.
	FirebaseUtilities.initalizeFirebase();

	// Get current logged in user and start the vue app.
	AuthenticationUtilities.auth().onAuthStateChanged((user: firebase.User | null) => {
		if (!app) {
			// Load language file for localization and start application.
			LocalizationUtilities.loadPreferredLanguageAsync().then(() => {
				startApplication();
			});
		}

		// 	// Set current user instance if a logged in user already exists on app load.
		if (user) {
			AuthenticationUtilities.currentUser.value = user;
		}
	});
}

setupApplication();
