"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";

import {
	ListBoxItemDescription,
	type ListBoxItemDescriptionProps,
} from "@/src/primitives/list-box-item-description";

export interface DropdownItemDescriptionProps extends ListBoxItemDescriptionProps {}

export function DropdownItemDescription(props: Readonly<DropdownItemDescriptionProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<ListBoxItemDescription {...rest} className={cn(["col-start-1"], className)}>
			{children}
		</ListBoxItemDescription>
	);
}
