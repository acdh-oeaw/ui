"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	Group as AriaGroup,
	type GroupProps as AriaGroupProps,
} from "react-aria-components";

/** @internal */
export const comboBoxInputGroupStyles = styles({
	base: [
		"relative isolate inline-flex items-center justify-between rounded-sm border border-stroke-strong text-left whitespace-nowrap text-text-strong outline-offset-0 outline-transparent transition",
		"after:pointer-events-none after:absolute after:-inset-px after:-z-10 after:rounded-[inherit] after:transition",
		"hover:after:bg-fill-hover",
		"pressed:after:bg-fill-press",
		"focus:outline-hidden focus-visible:outline-2 focus-visible:outline-stroke-focus",
		"disabled:border-stroke-disabled disabled:text-text-disabled",
	],
	variants: {
		size: {
			sm: ["h-9"],
			md: ["h-10"],
			lg: ["h-11"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

/** @internal */
export type ComboBoxInputGroupStylesProps = GetVariantProps<typeof comboBoxInputGroupStyles>;

export interface ComboBoxInputGroupProps extends AriaGroupProps, ComboBoxInputGroupStylesProps {}

export function ComboBoxInputGroup(props: Readonly<ComboBoxInputGroupProps>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaGroup
			{...rest}
			className={composeRenderProps(className, (className) => {
				return comboBoxInputGroupStyles({ className, size });
			})}
		>
			{children}
		</AriaGroup>
	);
}
