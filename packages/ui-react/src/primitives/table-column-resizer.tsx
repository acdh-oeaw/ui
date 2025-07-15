"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	ColumnResizer as AriaColumnResizer,
	type ColumnResizerProps as AriaColumnResizerProps,
	composeRenderProps,
} from "react-aria-components";

export interface TableColumnResizerProps extends AriaColumnResizerProps {}

export function TableColumnResizer(props: Readonly<TableColumnResizerProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaColumnResizer
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn([], className);
			})}
		>
			{children}
		</AriaColumnResizer>
	);
}
