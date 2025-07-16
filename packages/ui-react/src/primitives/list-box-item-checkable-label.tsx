"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";

import { ListBoxItemLabel, type ListBoxItemLabelProps } from "@/src/primitives/list-box-item-label";

export interface ListBoxItemCheckableLabelProps extends ListBoxItemLabelProps {}

export function ListBoxItemCheckableLabel(
	props: Readonly<ListBoxItemCheckableLabelProps>,
): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<ListBoxItemLabel {...rest} className={cn(["col-start-1"], className)}>
			{children}
		</ListBoxItemLabel>
	);
}
