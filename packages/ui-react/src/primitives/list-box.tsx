"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	ListBox as AriaListBox,
	type ListBoxProps as AriaListBoxProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const listBoxStyles = styles({
	base: ["flex max-h-[inherit] flex-col overflow-y-auto text-text-strong"],
	variants: {
		size: {
			sm: ["p-0.5"],
			md: ["p-1"],
			lg: ["p-1.5"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type ListBoxStylesProps = GetVariantProps<typeof listBoxStyles>;

export interface ListBoxProps<T extends object> extends AriaListBoxProps<T>, ListBoxStylesProps {}

export function ListBox<T extends object>(props: Readonly<ListBoxProps<T>>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaListBox
			{...rest}
			className={composeRenderProps(className, (className) => {
				return listBoxStyles({ className, size });
			})}
		>
			{children}
		</AriaListBox>
	);
}
