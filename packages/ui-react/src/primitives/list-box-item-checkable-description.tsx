"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";

import {
	ListBoxItemDescription,
	type ListBoxItemDescriptionProps,
} from "@/src/primitives/list-box-item-description";

export interface ListBoxItemCheckableDescriptionProps extends ListBoxItemDescriptionProps {}

export function ListBoxItemCheckableDescription(
	props: Readonly<ListBoxItemCheckableDescriptionProps>,
): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<ListBoxItemDescription {...rest} className={cn(["col-start-1"], className)}>
			{children}
		</ListBoxItemDescription>
	);
}
