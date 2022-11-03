import { ComponentModelBase } from "../base-classes/component-model-base";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";
import { Data } from "../types";
import { watch } from "vue";

/**
 * Component model for the range component.
 */
class EbTerminalModel extends ComponentModelBase {
	/**
	 * Specifies the localization namespace to use for getting localized text values.
	 */
	protected getLocalizationNamespace(): string {
		return "terminal";
	}

	/**
	 * Returns a terminal instance.
	 */
	private terminalInstance: Terminal = new Terminal({
		theme: {
			background: "#282c34"
		}
	});

	/**
	 * Initialise the component model.
	 */
	public init(props: Data, emit: Function): void {
		this.createTerminal();
		this.watchForData(props);
		this.onInput(emit);
	}

	/**
	 * Creates a terminal in the parent container element.
	 */
	private createTerminal(): void {
		const container: HTMLElement | null = document.getElementById("terminal"); 
		const fitAddon: FitAddon = new FitAddon();

		if (container) {
			this.terminalInstance.loadAddon(fitAddon);
			this.terminalInstance.open(container);
			this.terminalInstance.clear();
			fitAddon.fit();
		}
	}

	/**
	 * Watches for data changes and writes a new link to the terminal.
	 */
	private watchForData(props: Data): void {
		watch(() => {
			return [...props.data as Array<string>];
		}, (value: Array<string>, oldValue: Array<string>) => {
			const newLine: string = value.filter((line: string, index: number) => {
				return index > oldValue.length - 1;
			})[0];
			this.terminalInstance.write(newLine);
		});
	}

	/**
	 * Emits user input to the terminal.
	 */
	private onInput(emit: Function): void {
		this.terminalInstance.onData((data: string) => {
			emit("input", data);
		});
	}
}

// Export the component model
export const component: EbTerminalModel = new EbTerminalModel();