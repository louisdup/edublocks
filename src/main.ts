import { ComponentPublicInstance, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
import "@/data/state";
import components from "./components";
import layouts from "./layouts";
import modals from "./modals";

// Import third-party plugins
import { onAuthStateChanged, User } from "firebase/auth";
import "@splidejs/vue-splide/css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import providers
import "@/data/providers/icon-provider";
import { ScreenUtilities } from "./utilities/screen-utilities";
import { LocalizationUtilities } from "./utilities/localization-utilities";
import { AuthenticationUtilities } from "./utilities/authentication-utilities";
import { FirebaseUtilities } from "./utilities/firebase-utilities";
import { AppCheckUtilities } from "./utilities/app-check-utilities";

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

	// Redirects the user to the email verification page if they need to verify their email.
	AuthenticationUtilities.shouldRedirectToRegisterPage();

	// Checks if the current user's account is compatible with this version of EduBlocks.
	if (!AuthenticationUtilities.isCurrentUserCompatible()) {
		router.push("/upgrade");
	}
}

// Setup firebase & vue app.
function setupApplication(): void {
	// Initialize firebase.
	FirebaseUtilities.initializeApp();

	// Initalize firebase app check.
	AppCheckUtilities.initializeAppCheck();

	// Get current logged in user and start the vue app.
	onAuthStateChanged(AuthenticationUtilities.getAuth(), async (user: User | null) => {
		// 	// Set current user instance if a logged in user already exists on app load.
		if (user) {
			await AuthenticationUtilities.setCurrentUser(user);
		}
				
		if (!app) {
			// Load language file for localization and start application.
			LocalizationUtilities.loadPreferredLanguageAsync().then(() => {
				startApplication();
			});
		}
	});
}

setupApplication();
