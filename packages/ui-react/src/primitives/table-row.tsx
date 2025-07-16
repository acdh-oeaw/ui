"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	Row as AriaRow,
	type RowProps as AriaRowProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const tableRowStyles = styles({
	base: ["relative isolate cursor-default outline-none"],
	variants: {
		size: {
			sm: [],
			md: [],
			lg: [],
		},
		variant: {
			default: [],
			striped: ["odd:bg-fill-weaker"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
		variant: "default",
	},
});

export type TableRowStylesProps = GetVariantProps<typeof tableRowStyles>;

export interface TableRowProps<T extends object> extends AriaRowProps<T>, TableRowStylesProps {}

export function TableRow<T extends object>(props: Readonly<TableRowProps<T>>): ReactNode {
	const { children, className, size, variant, ...rest } = useStylesContext(props);

	return (
		<AriaRow
			{...rest}
			className={composeRenderProps(className, (className) => {
				return tableRowStyles({ className, size, variant });
			})}
		>
			{children}
		</AriaRow>
	);
}
