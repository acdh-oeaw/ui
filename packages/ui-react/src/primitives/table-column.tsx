"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Column as AriaColumn,
	type ColumnProps as AriaColumnProps,
	composeRenderProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const tableColumnStyles = styles({
	base: [
		"h-12 cursor-default border-y border-stroke-weak px-6 py-3.5 text-left text-sm/5 font-strong text-text-weak",
	],
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

export type TableColumnStylesProps = GetVariantProps<typeof tableColumnStyles>;

export interface TableColumnProps extends AriaColumnProps, TableColumnStylesProps {}

export function TableColumn(props: Readonly<TableColumnProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaColumn
			{...rest}
			className={composeRenderProps(className, (className) => {
				return tableColumnStyles({ className, size });
			})}
		>
			{children}
		</AriaColumn>
	);
}
