export class FetchRequest {
	private _url: string;
	private _body: BodyInit | null | undefined;
	private _limit: number | undefined;
	private _offset: number | undefined;

	constructor(resourcePath: string, body?: BodyInit | null | undefined, limit?: number | undefined, offset?: number | undefined) {
		this._url = resourcePath;
		this._body = body;
		this._limit = limit;
		this._offset = offset;
	}

	public get url(): string {
		return this._url;
	}

	public get body(): BodyInit | null | undefined {
		return this._body;
	}

	public get limit(): number | undefined {
		return this._limit;
	}

	public get offset(): number | undefined {
		return this._offset;
	}
}