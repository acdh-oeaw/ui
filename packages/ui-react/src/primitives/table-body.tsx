"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	TableBody as AriaTableBody,
	type TableBodyProps as AriaTableBodyProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const tableBodyStyles = styles({
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

export type TableBodyStylesProps = GetVariantProps<typeof tableBodyStyles>;

export interface TableBodyProps<T extends object>
	extends AriaTableBodyProps<T>,
		TableBodyStylesProps {}

export function TableBody<T extends object>(props: Readonly<TableBodyProps<T>>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaTableBody
			{...rest}
			className={composeRenderProps(className, (className) => {
				return tableBodyStyles({ className, size });
			})}
		>
			{children}
		</AriaTableBody>
	);
}
