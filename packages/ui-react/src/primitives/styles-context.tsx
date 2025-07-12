"use client";

import { createContext, type CSSProperties, use } from "react";

export interface StylesContextValue {
	size?: "sm" | "md" | "lg";
	style?: CSSProperties;
	tone?: "brand" | "neutral" | "inverse" | "negative" | "positive" | "warning" | "informative";
}

export const StylesContext = createContext<StylesContextValue>({});

export function useStylesContext<T extends object>(props: T): StylesContextValue & T {
	const value = use(StylesContext);

	return {
		...value,
		...props,
		style: "style" in props ? { ...value.style, ...(props.style as CSSProperties) } : value.style,
	};
}
