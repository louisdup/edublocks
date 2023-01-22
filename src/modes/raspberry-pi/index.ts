import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { ModeModelBase } from "../base-classes/mode-model-base";
import * as LinkProvider from "@/data/providers/link-provider";

// Output Panel Components
import PythonCode from "../common/components/output-panel/python-code/python-code.vue";
import Terminal from "./components/output-panel/terminal/terminal.vue";

// Import Toolbox Categories
import variables from "../common/blocks/python/variables/toolbox.xml?raw";
import { ModalUtilities } from "@/utilities/modal-utilities";

/**
 * Mode model for the Raspberry Pi mode.
 */
export class RaspberryPiModel extends ModeModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "raspberry-pi";
	}
		
	/**
	 * Returns config/information about the Raspberry Pi mode.
	 */
	public config: ModeConfigModel = {
		name: "Raspberry Pi",
		key: "raspberry-pi",
		color: "pink",
		logo: "/images/modes/raspberry-pi/logo.svg",
		image: "/images/modes/raspberry-pi/thumbnail.svg",
		fileExtension: "py"
	};

	/**
	 * Initalize the Raspberry Pi mode.
	 */
	public init(): void {
		this.showConnectRaspberryPiModal();
	}

	/**
	 * Returns the start block that appears at the top of all python code.
	 */
	public startBlock: string = "events_start_here";

	/**
	 * Loads block definitions and generators for the Raspberry Pi mode.
	 */
	public loadBlocks(): Promise<void> {
		return new Promise(async (resolve: VoidFunction) => {
			const commonDefinitions: any = import("../common/blocks/python/common/definitions");
			const commonGenerators: any = import("../common/blocks/python/common/generators");

			const basicDefinitions: any = import("../common/blocks/python/basic/definitions");
			const basicGenerators: any = import("../common/blocks/python/basic/generators");

			(await commonDefinitions).default();
			(await commonGenerators).default();

			(await basicDefinitions).default();
			(await basicGenerators).default();

			resolve();
		});
	}

	/**
	 * Returns a blockly toolbox for the Raspberry Pi mode.
	 */
	public getToolbox(): Array<String> {
		return [
			variables
		];
	}
	
	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Array<EditorButtonModel> = [
		...this.commonHeaderButtons,
		{
			key: "run",
			icon: ["fas", "play"],
			color: "blue",
			action: (): void => {
				this.runCode();
			}
		},
		{
			key: "stop",
			icon: ["fas", "square"],
			color: "red",
			visible: false,
			action: (): void => {
				this.stopCode();
			}
		}
	];

	/**
	 * Returns a list of tabs to display in the sidebar for Raspberry Pi.
	 */
	public sidebarTabs: Array<EditorSidebarTabModel> = [
		...this.commonSidebarTabs
	];
	
	/**
	 * Returns a list of tabs that to display in the output panel for Raspberry Pi.
	 */
	public outputPanelTabs: Array<EditorOutputTabModel> = [
		...this.commonOutputPanelTabs,
		{
			key: "code",
			component: PythonCode,
			active: true
		},
		{
			key: "terminal",
			component: Terminal,
			visible: false
		}
	];
	
	/**
	 * Returns python code from the blockly workspace.
	 */
	public getCodeFromBlocks(): string | undefined {
		if (EditorUtilities.currentProject) {
			return Blockly.Python.workspaceToCode(EditorUtilities.blocklyInstance);
		}
		else {
			return undefined;
		}
	}

	/**
	 * Shows the connect raspberry pi modal.
	 */
	private showConnectRaspberryPiModal(): void {
		ModalUtilities.showModal({
			modal: "ConnectRaspberryPi"
		});
	}

	/**
	 * Called when the user clicks the run button and runs the code.
	 */
	private runCode(): void {
		// Expands the output panel on mobile.
		this.expandOutputPanel();
	
		// Hide the run button, as code is about to run.
		this.setHeaderButtonHidden("run");
	
		// Show the stop button, so the user can stop the code running.
		this.setHeaderButtonVisible("stop");
	
		// Make the terminal tab visible.
		this.setOutputPanelTabVisible("terminal");
	
		// Set the terminal tab to be active so the user can see the output of their code.
		this.setOutputPanelTabActive("terminal");

		// Send and run the code on the connected EduBlocks Link device.
		LinkProvider.runCodeAsync();
	}
			
	/**
	 * Called when the user clicks the stop button and stops any running code.
	 */
	private stopCode(): void {
		// Closes the output panel on mobile.
		this.closeOutputPanel();
			
		// Hide the stop button, as code is about to stop.
		this.setHeaderButtonHidden("stop");
	
		// Show the run button, so the user can run the code again if they wish.
		this.setHeaderButtonVisible("run");
	
		// Make the terminal tab visible.
		this.setOutputPanelTabHidden("terminal");
	
		// Set the code tab to be active so the user can see their code again.
		this.setOutputPanelTabActive("code");
	}
}

// Export the mode model.
export const raspberryPi: RaspberryPiModel = new RaspberryPiModel();