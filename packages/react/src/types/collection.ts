import type { Key } from "react-aria-components";

export type { Key };

export interface CollectionItem {
	id: Key;
}

export type WithId<T extends object> = CollectionItem & T;
