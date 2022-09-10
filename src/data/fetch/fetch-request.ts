import { QueryDocumentSnapshot } from "@firebase/firestore";
import firebase from "firebase/compat/app";

/**
 * Define a firestore fetch request for the helper function.
 */
export class FetchRequest {
	private _url: string;
	private _body: firebase.firestore.UpdateData | undefined;
	private _orderBy: string | undefined;
	private _limit: number | undefined;
	private _offset: QueryDocumentSnapshot | undefined;
	private _searchTerm: string | undefined;

	constructor(resourcePath: string, body?: firebase.firestore.UpdateData, orderBy?: string, limit?: number, offset?: QueryDocumentSnapshot, searchTerm?: string) {
		this._url = resourcePath;
		this._body = body;
		this._orderBy = orderBy;
		this._limit = limit;
		this._offset = offset;
		this._searchTerm = searchTerm;
	}

	public get url(): string {
		return this._url;
	}

	public get body(): firebase.firestore.UpdateData | undefined {
		return this._body;
	}

	public get limit(): number | undefined {
		return this._limit;
	}

	public get orderBy(): string | undefined {
		return this._orderBy;
	}

	public get offset(): QueryDocumentSnapshot | undefined {
		return this._offset;
	}

	public get searchTerm(): string | undefined {
		return this._searchTerm;
	}
}