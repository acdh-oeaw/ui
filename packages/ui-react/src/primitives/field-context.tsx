"use client";

import { createContext, use } from "react";

/** @internal */
export interface FieldContextValue {
	isDisabled?: boolean;
	isInvalid?: boolean;
	isReadOnly?: boolean;
	isRequired?: boolean;
}

/** @internal */
export const FieldContext = createContext<FieldContextValue>({});

/** @internal */
export function useFieldContext(): FieldContextValue {
	const value = use(FieldContext);

	return value;
}
