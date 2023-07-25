"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	ListBox as AriaListBox,
	type ListBoxProps as AriaListBoxProps,
} from "react-aria-components";

export interface ListBoxProps<T extends object> extends AriaListBoxProps<T> {}

export function ListBox<T extends object>(props: Readonly<ListBoxProps<T>>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaListBox
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn(["flex flex-col py-1 text-text-strong outline-hidden"], className);
			})}
		>
			{children}
		</AriaListBox>
	);
}
