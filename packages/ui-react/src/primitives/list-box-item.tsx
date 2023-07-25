"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	ListBoxItem as AriaListBoxItem,
	type ListBoxItemProps as AriaListBoxItemProps,
} from "react-aria-components";

export interface ListBoxItemProps<T extends object> extends AriaListBoxItemProps<T> {}

export function ListBoxItem<T extends object>(props: Readonly<ListBoxItemProps<T>>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaListBoxItem
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn(
					[
						"px-4 py-1.5 text-sm/5",
						"relative isolate inline-flex cursor-default items-center text-left -outline-offset-2 outline-transparent transition select-none",
						"after:pointer-events-none after:absolute after:-inset-px after:-z-10 after:rounded-[inherit] after:transition",
						"hover:after:bg-fill-hover",
						"pressed:after:bg-fill-press",
						"focus:outline-hidden focus-visible:outline-2 focus-visible:outline-stroke-focus",
						"selected:bg-fill-hover",
						"disabled:text-text-disabled",
					],
					className,
				);
			})}
		>
			{children}
		</AriaListBoxItem>
	);
}
