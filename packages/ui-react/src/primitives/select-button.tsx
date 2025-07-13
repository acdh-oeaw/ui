"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const selectButtonStyles = styles({
	base: [
		"relative isolate inline-flex items-center rounded-sm border border-stroke-strong text-left whitespace-nowrap outline-offset-0 outline-transparent transition",
		"after:pointer-events-none after:absolute after:-inset-px after:-z-1 after:rounded-[inherit] after:transition",
		"hover:after:bg-fill-hover",
		"pressed:after:bg-fill-press",
		"focus:outline-hidden focus-visible:outline-2 focus-visible:outline-stroke-focus focus-visible:outline-solid",
	],
	variants: {
		size: {
			sm: ["h-9 gap-x-2 text-sm/5"],
			md: ["h-10 gap-x-2 text-base/6"],
			lg: ["h-11 gap-x-2 text-base/6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type SelectButtonStylesProps = GetVariantProps<typeof selectButtonStyles>;
export interface SelectButtonProps extends AriaButtonProps, SelectButtonStylesProps {}

export function SelectButton(props: Readonly<SelectButtonProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaButton
			{...rest}
			className={composeRenderProps(className, (className) => {
				return selectButtonStyles({ className, size });
			})}
		>
			{children}
		</AriaButton>
	);
}
