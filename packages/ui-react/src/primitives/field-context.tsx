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
		...props,
		isDisabled:
			"isDisabled" in props && props.isDisabled !== undefined
				? (props.isDisabled as FieldContextValue["isDisabled"])
				: value.isDisabled,
		isInvalid:
			"isInvalid" in props && props.isInvalid !== undefined
				? (props.isInvalid as FieldContextValue["isInvalid"])
				: value.isInvalid,
		isReadOnly:
			"isReadOnly" in props && props.isReadOnly !== undefined
				? (props.isReadOnly as FieldContextValue["isReadOnly"])
				: value.isReadOnly,
		isRequired:
			"isRequired" in props && props.isRequired !== undefined
				? (props.isRequired as FieldContextValue["isRequired"])
				: value.isRequired,
	};
}
