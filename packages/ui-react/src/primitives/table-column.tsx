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
