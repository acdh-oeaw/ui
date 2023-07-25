"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	Input as AriaInput,
	type InputProps as AriaInputProps,
} from "react-aria-components";

/** @internal */
export const comboBoxInputStyles = styles({
	base: ["focus:outline-none"],
	variants: {
		size: {
			sm: ["px-3.5 py-[calc(--spacing(2)-1px)] text-sm/5"],
			md: ["px-4 py-[calc(--spacing(2.5)-1px)] text-sm/5"],
			lg: ["px-4.5 py-[calc(--spacing(2.5)-1px)] text-base/6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

/** @internal */
export type ComboBoxInputStylesProps = GetVariantProps<typeof comboBoxInputStyles>;

export interface ComboBoxInputProps
	extends Omit<AriaInputProps, "size">,
		ComboBoxInputStylesProps {}

export function ComboBoxInput(props: Readonly<ComboBoxInputProps>): ReactNode {
	const { children, className, size, ...rest } = props;

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
