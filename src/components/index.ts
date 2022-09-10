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
import EbList from "./eb-list/eb-list.vue";
import EbListItem from "./eb-list/eb-list-item/eb-list-item.vue";
import EbTable from "./eb-table/eb-table.vue";
import EbTableRow from "./eb-table/eb-table-row/eb-table-row.vue";
import EbTableCell from "./eb-table/eb-table-cell/eb-table-cell.vue";
import EbLabel from "./eb-label/eb-label.vue";
import EbVStack from "./eb-v-stack/eb-v-stack.vue";
import EbHStack from "./eb-h-stack/eb-h-stack.vue";
import EbSearch from "./eb-search/eb-search.vue";
import EbIconButton from "./eb-icon/eb-icon-button/eb-icon-button.vue";

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
		app.component(ComponentName.EbList, EbList);
		app.component(ComponentName.EbListItem, EbListItem);
		app.component(ComponentName.EbTable, EbTable);
		app.component(ComponentName.EbTableRow, EbTableRow);
		app.component(ComponentName.EbTableCell, EbTableCell);
		app.component(ComponentName.EbLabel, EbLabel);
		app.component(ComponentName.EbVStack, EbVStack);
		app.component(ComponentName.EbHStack, EbHStack);
		app.component(ComponentName.EbSearch, EbSearch);
		app.component(ComponentName.EbIconButton, EbIconButton);
	}
};