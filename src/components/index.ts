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
import EbInput from "./eb-input/eb-input.vue";
import EbLink from "./eb-link/eb-link.vue";
import EbTable from "./eb-table/eb-table.vue";
import EbLabel from "./eb-label/eb-label.vue";
import EbVStack from "./eb-v-stack/eb-v-stack.vue";
import EbHStack from "./eb-h-stack/eb-h-stack.vue";
import EbSearch from "./eb-search/eb-search.vue";
import EbIconButton from "./eb-icon/eb-icon-button/eb-icon-button.vue";
import EbTabs from "./eb-tabs/eb-tabs.vue";
import EbSplitView from "./eb-split-view/eb-split-view.vue";
import EbSplitViewPane from "./eb-split-view/eb-split-view-pane/eb-split-view-pane.vue";
import EbSheet from "./eb-sheet/eb-sheet.vue";
import EbRadioGroup from "./eb-radio-group/eb-radio-group.vue";
import EbSelect from "./eb-select/eb-select.vue";
import EbChip from "./eb-chip/eb-chip.vue";
import EbLoading from "./eb-loading/eb-loading.vue";
import EbEmptyState from "./eb-empty-state/eb-empty-state.vue";
import EbRange from "./eb-range/eb-range.vue";
import EbToggle from "./eb-toggle/eb-toggle.vue";
import EbProgress from "./eb-progress/eb-progress.vue";

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
		app.component(ComponentName.EbInput, EbInput);
		app.component(ComponentName.EbLink, EbLink);
		app.component(ComponentName.EbTable, EbTable);
		app.component(ComponentName.EbLabel, EbLabel);
		app.component(ComponentName.EbVStack, EbVStack);
		app.component(ComponentName.EbHStack, EbHStack);
		app.component(ComponentName.EbSearch, EbSearch);
		app.component(ComponentName.EbIconButton, EbIconButton);
		app.component(ComponentName.EbTabs, EbTabs);
		app.component(ComponentName.EbSplitView, EbSplitView);
		app.component(ComponentName.EbSplitViewPane, EbSplitViewPane);
		app.component(ComponentName.EbSheet, EbSheet);
		app.component(ComponentName.EbRadioGroup, EbRadioGroup);
		app.component(ComponentName.EbSelect, EbSelect);
		app.component(ComponentName.EbChip, EbChip);
		app.component(ComponentName.EbLoading, EbLoading);
		app.component(ComponentName.EbEmptyState, EbEmptyState);
		app.component(ComponentName.EbRange, EbRange);
		app.component(ComponentName.EbToggle, EbToggle);
		app.component(ComponentName.EbProgress, EbProgress);
	}
};