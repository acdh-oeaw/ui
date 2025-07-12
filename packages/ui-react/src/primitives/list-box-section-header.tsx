"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { Header as AriaHeader } from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const listBoxSectionHeaderStyles = styles({
	base: [],
	variants: {
		size: {
			sm: [],
			md: [],
			lg: [],
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
