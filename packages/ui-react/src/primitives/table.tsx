"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import { type ReactNode, useMemo } from "react";
import {
	composeRenderProps,
	Table as AriaTable,
	type TableProps as AriaTableProps,
} from "react-aria-components";

import { StylesContext, useStylesContext } from "@/src/primitives/styles-context";

export const tableStyles = styles({
	base: [],
	variants: {
		size: {
			sm: ["text-sm/5"],
			md: ["text-base/6"],
			lg: ["text-base/6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type TableStylesProps = GetVariantProps<typeof tableStyles>;

export interface TableProps extends AriaTableProps, TableStylesProps {}

export function Table(props: Readonly<TableProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	const stylesProps = useMemo(() => {
		return { size };
	}, [size]);

	return (
		<AriaTable
			{...rest}
			className={composeRenderProps(className, (className) => {
				return tableStyles({ className, size });
			})}
		>
			<StylesContext value={stylesProps}>{children}</StylesContext>
		</AriaTable>
	);
}
