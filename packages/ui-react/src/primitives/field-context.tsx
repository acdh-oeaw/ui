"use client";

import { createContext, use } from "react";

export interface FieldContextValue {
	isDisabled?: boolean;
	isInvalid?: boolean;
	isReadOnly?: boolean;
	isRequired?: boolean;
}

export const FieldContext = createContext<FieldContextValue>({});

export function useFieldContext<T extends object>(props: T): FieldContextValue & T {
	const value = use(FieldContext);

	return {
		...value,
		...props,
	};
}
