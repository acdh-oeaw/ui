"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	Group as AriaGroup,
	type GroupProps as AriaGroupProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const comboBoxInputGroupStyles = styles({
	base: [
		"relative isolate inline-flex items-center rounded-weak border border-stroke-strong bg-fill-inverse-strong text-left whitespace-nowrap outline-offset-0 outline-transparent transition",
		"after:pointer-events-none after:absolute after:-inset-px after:-z-1 after:rounded-[inherit] after:transition",
		"hover:after:bg-fill-hover",
		"has-pressed:after:bg-fill-press",
		"focus:outline-hidden focus-visible:outline-2 focus-visible:outline-stroke-focus focus-visible:outline-solid",
		"focus-within:outline-1 focus-within:outline-stroke-strong focus-within:outline-solid",
		"disabled:border-stroke-disabled disabled:text-text-disabled",
	],
	variants: {
		size: {
			sm: ["h-9 text-sm/5"],
			md: ["h-10 text-base/6"],
			lg: ["h-11 text-base/6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type ComboBoxInputGroupStylesProps = GetVariantProps<typeof comboBoxInputGroupStyles>;

export interface ComboBoxInputGroupProps extends AriaGroupProps, ComboBoxInputGroupStylesProps {}

export function ComboBoxInputGroup(props: Readonly<ComboBoxInputGroupProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

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
