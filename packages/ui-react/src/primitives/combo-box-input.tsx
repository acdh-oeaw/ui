"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	Input as AriaInput,
	type InputProps as AriaInputProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const comboBoxInputStyles = styles({
	base: [
		"flex-1 text-text-strong outline-none",
		"placeholder:text-text-weaker placeholder:italic",
		"disabled:text-text-disabled",
	],
	variants: {
		size: {
			sm: ["pr-2.5 first:pl-2.5"],
			md: ["pr-3 first:pl-3"],
			lg: ["pr-3.5 first:pl-3.5"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type ComboBoxInputStylesProps = GetVariantProps<typeof comboBoxInputStyles>;

export interface ComboBoxInputProps
	extends Omit<AriaInputProps, "size">,
		ComboBoxInputStylesProps {}

export function ComboBoxInput(props: Readonly<ComboBoxInputProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaInput
			{...rest}
			className={composeRenderProps(className, (className) => {
				return comboBoxInputStyles({ className, size });
			})}
		>
			{children}
		</AriaInput>
	);
}
