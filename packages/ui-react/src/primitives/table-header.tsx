"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	TableHeader as AriaTableHeader,
	type TableHeaderProps as AriaTableHeaderProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const tableHeaderStyles = styles({
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

export type TableHeaderStylesProps = GetVariantProps<typeof tableHeaderStyles>;

export interface TableHeaderProps<T extends object>
	extends AriaTableHeaderProps<T>,
		TableHeaderStylesProps {}

export function TableHeader<T extends object>(props: Readonly<TableHeaderProps<T>>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaTableHeader
			{...rest}
			className={composeRenderProps(className, (className) => {
				return tableHeaderStyles({ className, size });
			})}
		>
			{children}
		</AriaTableHeader>
	);
}
