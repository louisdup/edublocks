import { ComponentModelBase } from "@/components/base-classes/component-model-base";
import { reactive } from "vue";
import { TerminalState } from "./terminal-state";
import { LinkUtilities } from "@/utilities/link-utilities";

/**
 * Component model for the terminal component.
 */
export class TerminalModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "terminal";
	}
		
	/**
	 * Reactive instance of the component state.
	 */
	public state: TerminalState = reactive(new TerminalState());
		 
	/**
	 * Initalize the component model.
	 */
	public init(): void {
		this.watchForTerminalData();
	}

	/**
	 * Watches for any data from the connected raspberry pi.
	 */
	private watchForTerminalData(): void {
		if (LinkUtilities.socket) {
			LinkUtilities.onData((data: string): void => {
				this.state.data.push(data);
			});
		}
	}

	/**
	 * Writes data to the connected EduBlocks Link device when the user types in the terminal.
	 */
	public onInput(data: string): void {
		if (LinkUtilities.socket) {
			LinkUtilities.sendData(data);
		}
	}
}

// Export the component model.
export const component: TerminalModel = new TerminalModel();