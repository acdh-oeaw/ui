"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Cell as AriaCell,
	type CellProps as AriaCellProps,
	composeRenderProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const tableCellStyles = styles({
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

export type TableCellStylesProps = GetVariantProps<typeof tableCellStyles>;

export interface TableCellProps extends AriaCellProps, TableCellStylesProps {}

export function TableCell(props: Readonly<TableCellProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaCell
			{...rest}
			className={composeRenderProps(className, (className) => {
				return tableCellStyles({ className, size });
			})}
		>
			{children}
		</AriaCell>
	);
}
