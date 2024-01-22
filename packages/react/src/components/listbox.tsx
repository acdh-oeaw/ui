"use client";

import { type ElementRef, Fragment } from "react";
import {
	composeRenderProps,
	ListBox as AriaListbox,
	ListBoxItem as AriaListboxItem,
	type ListBoxItemProps as AriaListboxItemProps,
	type ListBoxProps as AriaListboxProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const listboxStyles = variants({
	base: "rounded-md border border-input p-1 outline-0",
});

export type ListboxStyles = VariantProps<typeof listboxStyles>;

export interface ListboxProps<T extends object>
	extends Omit<AriaListboxProps<T>, "layout" | "orientation">,
		ListboxStyles {}

export const Listbox = forwardRef(function Listbox<T extends object>(
	props: ListboxProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaListbox>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaListbox<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return listboxStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaListbox>
	);
});

export const listboxItemStyles = compose(
	focusRing,
	variants({
		base: "group relative flex cursor-default select-none items-center gap-8 rounded-sm px-2 py-1.5 text-sm forced-color-adjust-none",
		variants: {
			isSelected: {
				false: "-outline-offset-2 hover:bg-accent",
				true: "bg-accent text-accent-foreground -outline-offset-4 outline-background forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:outline-[HighlightText] [&+[data-selected]]:rounded-t-none [&:has(+[data-selected])]:rounded-b-none",
			},
			isDisabled: {
				true: "cursor-not-allowed opacity-50 forced-colors:text-[GrayText]",
			},
		},
	}),
);

export type ListboxItemStyles = VariantProps<typeof listboxItemStyles>;

export interface ListboxItemProps<T extends object>
	extends AriaListboxItemProps<T>,
		ListboxItemStyles {}

export const ListboxItem = forwardRef(function ListboxItem<T extends object>(
	props: ListboxItemProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaListboxItem>>,
) {
	const { children, className, ...rest } = props;

	const textValue = typeof props.children === "string" ? props.children : undefined;

	return (
		<AriaListboxItem<T>
			ref={forwardedRef}
			textValue={textValue}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return listboxItemStyles({ ...renderProps, className });
			})}
		>
			{composeRenderProps(children, (children) => {
				return (
					<Fragment>
						{children}
						<div className="absolute inset-x-4 bottom-0 hidden h-px forced-colors:bg-[HighlightText] [.group[data-selected]:has(+[data-selected])_&]:block" />
					</Fragment>
				);
			})}
		</AriaListboxItem>
	);
});
