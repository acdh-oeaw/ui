"use client";

import { createContext, use } from "react";

export interface CheckBoxStateContextValue {
	isIndeterminate?: boolean;
	isSelected?: boolean;
}

export const CheckBoxStateContext = createContext<CheckBoxStateContextValue>({});

export function useCheckBoxState(): CheckBoxStateContextValue {
	const value = use(CheckBoxStateContext);

	return value;
}
