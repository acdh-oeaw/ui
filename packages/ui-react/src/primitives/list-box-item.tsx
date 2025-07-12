"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	ListBoxItem as AriaListBoxItem,
	type ListBoxItemProps as AriaListBoxItemProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const listBoxItemStyles = styles({
	base: [
		"relative isolate inline-flex truncate whitespace-nowrap outline-offset-0 outline-transparent transition",
		"after:pointer-events-none after:absolute after:inset-0 after:-z-1 after:rounded-[inherit] after:transition",
		"hover:after:bg-fill-hover",
		"pressed:after:bg-fill-press",
		"focus:outline-hidden focus-visible:outline-2 focus-visible:outline-stroke-focus",
	],
	variants: {
		size: {
			sm: ["h-9 gap-x-2 px-2 text-sm/5"],
			md: ["h-10 gap-x-2 px-2 text-base/5"],
			lg: ["h-11 gap-x-2 px-2 text-base/6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type ListBoxItemStylesProps = GetVariantProps<typeof listBoxItemStyles>;

export interface ListBoxItemProps<T extends object>
	extends AriaListBoxItemProps<T>,
		ListBoxItemStylesProps {}

export function ListBoxItem<T extends object>(props: Readonly<ListBoxItemProps<T>>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaListBoxItem
			{...rest}
			className={composeRenderProps(className, (className) => {
				return listBoxItemStyles({ className, size });
			})}
		>
			{children}
		</AriaListBoxItem>
	);
}
