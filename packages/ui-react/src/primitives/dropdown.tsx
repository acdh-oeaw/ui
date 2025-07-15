"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";

import { ListBox, type ListBoxProps } from "@/src/primitives/list-box";

export interface DropdownProps<T extends object> extends ListBoxProps<T> {}

export function Dropdown<T extends object>(props: Readonly<DropdownProps<T>>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<ListBox {...rest} className={cn(["grid grid-cols-[1fr_auto]"], className)}>
			{children}
		</ListBox>
	);
}
