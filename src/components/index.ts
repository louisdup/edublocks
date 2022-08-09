import { App } from "vue";
import { ComponentName } from "./constants";

import EbSidebar from "./eb-sidebar/eb-sidebar.vue";
import EbIcon from "./eb-icon/eb-icon.vue";
import EbInput from "./eb-input/eb-input.vue";
import EbHeading from "./eb-heading/eb-heading.vue";
import EbButton from "./eb-button/eb-button.vue";
import EbBottombar from "./eb-bottombar/eb-bottombar.vue";

/**
 * Export & install application components for use globally
 */
export default {
	install(app: App): void {
		app.component(ComponentName.EbSidebar, EbSidebar);
		app.component(ComponentName.EbIcon, EbIcon);
		app.component(ComponentName.EbInput, EbInput);
		app.component(ComponentName.EbHeading, EbHeading);
		app.component(ComponentName.EbButton, EbButton);
		app.component(ComponentName.EbBottombar, EbBottombar);
	}
};