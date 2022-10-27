/**
 * Define a storage fetch request for the helper function.
 */
export class StorageFetchRequest {
	private _url: string;
	private _content: string | undefined;

	constructor(resourcePath: string, content?: string) {
		this._url = resourcePath;
		this._content = content;
	}

	public get url(): string {
		return this._url;
	}

	public get content(): string | undefined {
		return this._content;
	}
}