import * as microbitFs from "@microbit/microbit-fs";
import * as DAPjs from "dapjs";
import { saveAs } from "file-saver";
import { EditorButtonModel } from "@/data/models/editor-button-model";
import { EditorOutputTabModel } from "@/data/models/editor-output-tab-model";
import { EditorSidebarTabModel } from "@/data/models/editor-sidebar-tab-model";
import { ModeConfigModel } from "@/data/models/mode-config-model";
import { ModeModelBase } from "../base-classes/mode-model-base";
import { EditorUtilities } from "@/utilities/editor-utilities";
import { WebUSBUtilities } from "@/utilities/webusb-utilities";
import { ModalUtilities } from "@/utilities/modal-utilities";
import { DAPLinkUtilities } from "@/utilities/daplink-utilities";
import { ExtensionsUtilities } from "@/utilities/extensions-utilities";
import { ref, Ref, watchEffect } from "vue";

// Micropython HEX Files
import microbitMicropythonV1 from "./micropython/microbit-micropython-v1.hex?raw";
import microbitMicropythonV2 from "./micropython/microbit-micropython-v2.hex?raw";

// Sidebar tab Components
import Extensions from "../common/components/sidebar/extensions/extensions.vue";
import WebUSBSettings from "./components/sidebar/webusb-settings/webusb-settings.vue";

// Output Panel Components
import PythonCode from "../common/components/output-panel/python-code/python-code.vue";
import Simulator from "./components/output-panel/simulator/simulator.vue";
import Serial from "./components/output-panel/serial/serial.vue";

// Import Toolbox Categories
import basic from "./blocks/basic/toolbox.xml?raw";
import variables from "../common/blocks/python/variables/toolbox.xml?raw";
import display from "./blocks/display/toolbox.xml?raw";
import buttons from "./blocks/buttons/toolbox.xml?raw";
import accelerometer from "./blocks/accelerometer/toolbox.xml?raw";
import compass from "./blocks/compass/toolbox.xml?raw";
import radio from "./blocks/radio/toolbox.xml?raw";
import speech from "./blocks/speech/toolbox.xml?raw";
import music from "./blocks/music/toolbox.xml?raw";
import microphone from "./blocks/microphone/toolbox.xml?raw";
import neopixel from "./blocks/neopixel/toolbox.xml?raw";
import pins from "./blocks/pins/toolbox.xml?raw";
import { ExtensionModel } from "@/data/models/extension-model";
import { ExtensionCodeFileModel } from "@/data/models/extension-code-file";

/**
 * Mode model for the micro:bit mode.
 */
export class MicrobitModel extends ModeModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "microbit";
	}
		
	/**
	 * Returns config/information about the micro:bit mode.
	 */
	public config: ModeConfigModel = {
		name: "micro:bit",
		key: "microbit",
		color: "green",
		logo: "/images/modes/microbit/logo.svg",
		image: "/images/modes/microbit/thumbnail.svg",
		fileExtension: "py"
	};

	/**
	 * Returns the start block that appears at the top of all micro:bit code.
	 */
	public startBlock: string = "events_start_here";

	/**
	 * Initalize the microbit mode.
	 */
	public init(): void {
		this.watchForWebUSBDeviceConnection();
		WebUSBUtilities.setConnectedDevice();
	}

	/**
	 * Loads block definitions and generators for the micro:bit mode.
	 */
	public loadBlocks(): Promise<void> {
		return new Promise(async (resolve: VoidFunction) => {
			const commonDefinitions: any = import("../common/blocks/python/common/definitions");
			const commonGenerators: any = import("../common/blocks/python/common/generators");

			const deprecatedDefinitions: any = import("./blocks/deprecated/definitions");
			const deprecatedGenerators: any = import("./blocks/deprecated/generators");

			const basicDefinitions: any = import("../common/blocks/python/basic/definitions");
			const basicGenerators: any = import("../common/blocks/python/basic/generators");

			const microbitBasicDefinitions: any = import("./blocks/basic/definitions");
			const microbitBasicGenerators: any = import("./blocks/basic/generators");

			const variablesDefinitions: any = import("../common/blocks/python/variables/definitions");
			const variablesGenerators: any = import("../common/blocks/python/variables/generators");

			const displayDefinitions: any = import("./blocks/display/definitions");
			const displayGenerators: any = import("./blocks/display/generators");

			const buttonsDefinitions: any = import("./blocks/buttons/definitions");
			const buttonsGenerators: any = import("./blocks/buttons/generators");

			const accelerometerDefinitions: any = import("./blocks/accelerometer/definitions");
			const accelerometerGenerators: any = import("./blocks/accelerometer/generators");

			const compassDefinitions: any = import("./blocks/compass/definitions");
			const compassGenerators: any = import("./blocks/compass/generators");

			const radioDefinitions: any = import("./blocks/radio/definitions");
			const radioGenerators: any = import("./blocks/radio/generators");

			const speechDefinitions: any = import("./blocks/speech/definitions");
			const speechGenerators: any = import("./blocks/speech/generators");

			const musicDefinitions: any = import("./blocks/music/definitions");
			const musicGenerators: any = import("./blocks/music/generators");

			const microphoneDefinitions: any = import("./blocks/microphone/definitions");
			const microphoneGenerators: any = import("./blocks/microphone/generators");

			const neopixelDefinitions: any = import("./blocks/neopixel/definitions");
			const neopixelGenerators: any = import("./blocks/neopixel/generators");

			const pinsDefinitions: any = import("./blocks/pins/definitions");
			const pinsGenerators: any = import("./blocks/pins/generators");

			(await commonDefinitions).default();
			(await commonGenerators).default();

			(await deprecatedDefinitions).default();
			(await deprecatedGenerators).default();

			(await basicDefinitions).default();
			(await basicGenerators).default();

			(await microbitBasicDefinitions).default();
			(await microbitBasicGenerators).default();

			(await variablesDefinitions).default();
			(await variablesGenerators).default();

			(await displayDefinitions).default();
			(await displayGenerators).default();

			(await buttonsDefinitions).default();
			(await buttonsGenerators).default();

			(await accelerometerDefinitions).default();
			(await accelerometerGenerators).default();

			(await compassDefinitions).default();
			(await compassGenerators).default();

			(await radioDefinitions).default();
			(await radioGenerators).default();

			(await speechDefinitions).default();
			(await speechGenerators).default();

			(await musicDefinitions).default();
			(await musicGenerators).default();

			(await microphoneDefinitions).default();
			(await microphoneGenerators).default();

			(await neopixelDefinitions).default();
			(await neopixelGenerators).default();

			(await pinsDefinitions).default();
			(await pinsGenerators).default();

			resolve();
		});
	}

	/**
	 * Returns a blockly toolbox for the micro:bit mode.
	 */
	public getToolbox(): Array<String> {
		return [
			basic,
			variables,
			display,
			buttons,
			accelerometer,
			compass,
			radio,
			speech,
			music,
			microphone,
			neopixel,
			pins,
			ExtensionsUtilities.getToolboxEntriesForExtensions()
		];
	}

	/**
	 * Returns buttons to display in the header of the editor.
	 */
	public headerButtons: Array<EditorButtonModel> = [
		...this.commonHeaderButtons,
		{
			key: "connect",
			icon: ["fab", "usb"],
			color: "gray",
			visible: this.isConnectButtonVisible(),
			action: (): void => {
				ModalUtilities.showModal({
					modal: "ConnectMicrobit"
				});
			}
		},
		{
			key: "flash",
			icon: ["far", "bolt-lightning"],
			color: "blue",
			action: (): void => {
				this.flashMicrobit();
			}
		},
		{
			key: "download",
			icon: ["far", "arrow-down-to-line"],
			color: "blue",
			action: (): void => {
				this.downloadHexFile();
			}
		}
	];

	/**
	 * Returns a list of tabs to display in the sidebar for micro:bit.
	 */
	public sidebarTabs: Array<EditorSidebarTabModel> = [
		...this.commonSidebarTabs,
		{
			key: "extensions",
			icon: ["far", "puzzle-piece"],
			component: Extensions,
			readOnly: false
		},
		{
			key: "webusb-settings",
			icon: ["fab", "usb"],
			component: WebUSBSettings,
			visible: false
		}
	];

	/**
	 * Returns a list of tabs that to display in the output panel for micro:bit.
	 */
	public outputPanelTabs: Array<EditorOutputTabModel> = [
		...this.commonOutputPanelTabs,
		{
			key: "code",
			component: PythonCode,
			active: true
		},
		{
			key: "simulator",
			component: Simulator,
			active: false
		},
		{
			key: "serial",
			component: Serial,
			active: false,
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
	 * Returns a micropython filesystem for the micro:bit.
	 */
	private micropythonFs: microbitFs.MicropythonFsHex = new microbitFs.MicropythonFsHex([
		{
			hex: microbitMicropythonV1,
			boardId: microbitFs.microbitBoardId.V1
		},
		{
			hex: microbitMicropythonV2,
			boardId: microbitFs.microbitBoardId.V2
		}
	]);

	/**
	 * Adds files from active extensions to the filesystem.
	 */
	private addExtensionFilesToFilesystem(): void {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.extensions) {
			EditorUtilities.currentProject.value.extensions.forEach((extension: ExtensionModel) => {
				extension.code.forEach((file: ExtensionCodeFileModel) => {
					this.micropythonFs.write(file.name, file.content);
				});
			});
		}
	}

	/**
	 * Generates a universal hex file for transferring onto a microbit.
	 */
	private getUniversalHexFile(): string | undefined {
		if (EditorUtilities.currentProject.value && EditorUtilities.currentProject.value.code) {
			this.addExtensionFilesToFilesystem();
			this.micropythonFs.write("main.py", EditorUtilities.currentProject.value.code);
			return this.micropythonFs.getUniversalHex();
		}
		else {
			return undefined;
		}
	}

	/**
	 * Downloads a hex file for transferring onto a micro:bit.
	 */
	private downloadHexFile(): void {
		const universalHex: string | undefined = this.getUniversalHexFile();

		if (EditorUtilities.currentProject.value && universalHex) {
			const fileName: string = `${EditorUtilities.currentProject.value.name}.hex`;
			saveAs(new Blob([universalHex]), fileName);
		}
	}

	/**
	 * True if webUSB is supported.
	 */
	private isConnectButtonVisible(): boolean {
		return WebUSBUtilities.isWebUSBSupported();
	}

	/**
	 * Watches for changes and configures the editor if a webUSB Device is connected.
	 */
	private watchForWebUSBDeviceConnection(): void {
		watchEffect(() => {
			if (WebUSBUtilities.device.value) {
				DAPLinkUtilities.setupDAPLink();
				this.setHeaderButtonHidden("download");
				this.setHeaderButtonHidden("connect");
				this.setHeaderButtonVisible("flash");
				this.setSidebarTabVisible("webusb-settings");
				this.setOutputPanelTabVisible("serial");
			}
			else {
				this.setOutputPanelTabActive("code");
				this.setOutputPanelTabHidden("serial");
				this.setSidebarTabInactive("webusb-settings");
				this.setSidebarTabHidden("webusb-settings");
				this.setHeaderButtonHidden("flash");
				this.setHeaderButtonVisible("download");
				if (this.isConnectButtonVisible()) {
					this.setHeaderButtonVisible("connect");
				}
			}
		});
	}

	/**
	 * Flashes a HEX file onto a micro:bit via webUSB.
	 */
	private async flashMicrobit(): Promise<void> {
		const universalHex: string | undefined = this.getUniversalHexFile();

		if (WebUSBUtilities.device.value && DAPLinkUtilities.daplinkInstance.value && universalHex) {
			const image: ArrayBufferLike = new TextEncoder().encode(universalHex).buffer;
			const flashProgress: Ref<number> = ref(0);

			DAPLinkUtilities.daplinkInstance.value.on(DAPjs.DAPLink.EVENT_PROGRESS, (progress: number) => {
				flashProgress.value = Math.round(progress * 100);
			});
			
			try {
				await DAPLinkUtilities.daplinkInstance.value.connect();
				this.setOutputPanelTabActive("code");
				ModalUtilities.showModal({
					modal: "Progress",
					options: {
						title: this.getText("flashing-code"),
						progress: flashProgress
					}
				});
				await DAPLinkUtilities.daplinkInstance.value.flash(image);
			}
			catch (error) {
				ModalUtilities.showModal({
					modal: "Error"
				});
			}
		}
	}
}

// Export the mode model.
export const microbit: MicrobitModel = new MicrobitModel();