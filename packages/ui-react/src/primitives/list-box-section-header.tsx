"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { Header as AriaHeader } from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const listBoxSectionHeaderStyles = styles({
	base: [
		"sticky top-0 z-10 inline-flex items-center truncate border-y border-stroke-weak bg-background-overlay text-text-weak select-none",
	],
	variants: {
		size: {
			sm: ["h-9 px-2 text-sm/5"],
			md: ["h-10 px-2 text-base/6"],
			lg: ["h-11 px-2 text-base/6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type ListBoxSectionHeaderStylesProps = GetVariantProps<typeof listBoxSectionHeaderStyles>;

export interface ListBoxSectionHeaderProps
	extends ComponentPropsWithRef<typeof AriaHeader>,
		ListBoxSectionHeaderStylesProps {}

export function ListBoxSectionHeader(props: Readonly<ListBoxSectionHeaderProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaHeader {...rest} className={listBoxSectionHeaderStyles({ className, size })}>
			{children}
		</AriaHeader>
	);
}
