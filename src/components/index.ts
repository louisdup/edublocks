import { App } from "vue";
import { ComponentName } from "./constants";

import EbSidebar from "./eb-sidebar/eb-sidebar.vue";
import EbIcon from "./eb-icon/eb-icon.vue";
import EbHeading from "./eb-heading/eb-heading.vue";
import EbButton from "./eb-button/eb-button.vue";
import EbBottombar from "./eb-bottombar/eb-bottombar.vue";
import EbCard from "./eb-card/eb-card.vue";
import EbGrid from "./eb-grid/eb-grid.vue";
import EbSlider from "./eb-slider/eb-slider.vue";
import EbSliderSlide from "./eb-slider/eb-slider-slide/eb-slider-slide.vue";
import EbModal from "./eb-modal/eb-modal.vue";
import EbModalHeader from "./eb-modal/eb-modal-header/eb-modal-header.vue";
import EbModalContent from "./eb-modal/eb-modal-content/eb-modal-content.vue";
import EbModalFooter from "./eb-modal/eb-modal-footer/eb-modal-footer.vue";
import EbDropdown from "./eb-dropdown/eb-dropdown.vue";

/**
 * Export & install application components for use globally
 */
export default {
	install(app: App): void {
		app.component(ComponentName.EbSidebar, EbSidebar);
		app.component(ComponentName.EbIcon, EbIcon);
		app.component(ComponentName.EbHeading, EbHeading);
		app.component(ComponentName.EbButton, EbButton);
		app.component(ComponentName.EbBottombar, EbBottombar);
		app.component(ComponentName.EbCard, EbCard);
		app.component(ComponentName.EbGrid, EbGrid);
		app.component(ComponentName.EbSlider, EbSlider);
		app.component(ComponentName.EbSliderSlide, EbSliderSlide);
		app.component(ComponentName.EbModal, EbModal);
		app.component(ComponentName.EbModalHeader, EbModalHeader);
		app.component(ComponentName.EbModalContent, EbModalContent);
		app.component(ComponentName.EbModalFooter, EbModalFooter);
		app.component(ComponentName.EbDropdown, EbDropdown);
	}
};