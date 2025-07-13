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
		...props,
		size:
			"size" in props && props.size !== undefined
				? (props.size as StylesContextValue["size"])
				: value.size,
		style:
			"style" in props
				? {
						...value.style,
						...(props.style as CSSProperties),
					}
				: value.style,
		tone:
			"tone" in props && props.tone !== undefined
				? (props.tone as StylesContextValue["tone"])
				: value.tone,
	};
}
