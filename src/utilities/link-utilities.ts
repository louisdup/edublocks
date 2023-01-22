import { ref, Ref } from "vue";

/**
 * Utility functions for working with EduBlocks Link (https://github.com/edublocks/edublocks-link).
 */
export class LinkUtilities {
	/**
	 * Returns the port of the EduBlocks link server.
	 */
	public static port: number = 8081;
    
	/**
	 * Returns the IP Address of the device running EduBlocks Link.
	 */
	public static ipAddress: Ref<string | undefined> = ref();

	/**
	 * Returns the websocket connection to the device running EduBlocks Link.
	 */
	public static socket: WebSocket | undefined = undefined;

	/**
	 * Initalise a websocket connection to the device running EduBlocks Link.
	 */
	public static connect(): Promise<void> {
		return new Promise((resolve: VoidFunction, reject: VoidFunction) => {
			const url: string = `ws://${this.ipAddress.value}:${this.port}/terminal`;
			this.socket = new WebSocket(url);

			this.socket.onopen = (): void => {
				resolve();
			};

			this.socket.onerror = (): void => {
				reject();
			};
		});
	}

	/**
	 * Calls a function when data is recieved from the device running EduBlocks Link.
	 */
	public static onData(callback: Function): void {
		if (this.socket) {
			this.socket.onmessage = (event: MessageEvent): void => {
				const data: any = JSON.parse(event.data);
				if (data.packetType === "data") {
					callback(data.payload);
				}
			};
		}
	}

	/**
	 * Sends data to the device running EduBlocks Link.
	 */
	public static sendData(data: string): void {
		if (this.socket) {
			const packet: object = {
				packetType: "data",
				payload: data
			};
			this.socket.send(JSON.stringify(packet));
		}
	}

	/**
	 * Calls a function when the connection to the EduBlocks Link device is closed.
	 */
	public static onClose(callback: Function): void {
		if (this.socket) {
			this.socket.onclose = (): void => {
				callback();
			};
		}
	}
}