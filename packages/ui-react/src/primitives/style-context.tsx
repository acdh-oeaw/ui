"use client";

import { createContext, use } from "react";

/** @internal */
export interface StyleContextValue {
	size?: "sm" | "md" | "lg";
	tone?: "brand" | "neutral" | "inverse" | "negative" | "positive" | "warning" | "informative";
}

/** @internal */
export const StyleContext = createContext<StyleContextValue>({});

/** @internal */
export function useStyleContext(): StyleContextValue {
	const value = use(StyleContext);

	return value;
}
