"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	SelectValue as AriaSelectValue,
	type SelectValueProps as AriaSelectValueProps,
} from "react-aria-components";

import { useFieldContext } from "@/src/primitives/field-context";
import { useStylesContext } from "@/src/primitives/styles-context";

export const selectValueStyles = styles({
	base: [
		"flex-1 text-text-strong",
		"placeholder-shown:text-text-weaker placeholder-shown:italic",
		"disabled:text-text-disabled",
		"*:[slot=description]:hidden",
	],
	variants: {
		size: {
			sm: ["px-2.5"],
			md: ["px-3"],
			lg: ["px-3.5"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type SelectValueStylesProps = GetVariantProps<typeof selectValueStyles>;

export interface SelectValueProps<T extends object>
	extends AriaSelectValueProps<T>,
		SelectValueStylesProps {
	isDisabled?: boolean;
}

export function SelectValue<T extends object>(props: Readonly<SelectValueProps<T>>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	const { isDisabled } = useFieldContext(props);

	return (
		<AriaSelectValue
			{...rest}
			className={composeRenderProps(className, (className) => {
				return selectValueStyles({ className, size });
			})}
			data-disabled={isDisabled === true || undefined}
		>
			{children}
		</AriaSelectValue>
	);
}
