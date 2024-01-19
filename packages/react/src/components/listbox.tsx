import { CheckIcon } from "lucide-react";
import { type ElementRef, Fragment } from "react";
import {
	Collection as AriaCollection,
	composeRenderProps,
	Header as AriaHeader,
	ListBox as AriaListbox,
	ListBoxItem as AriaDropdownItem,
	ListBoxItem as AriaListboxItem,
	type ListBoxItemProps as AriaDropdownItemProps,
	type ListBoxItemProps as AriaListboxItemProps,
	type ListBoxProps as AriaListboxProps,
	Section as AriaDropdownSection,
	type SectionProps as AriaDropdownSectionProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const listboxStyles = variants({
	base: "rounded-lg border border-neutral-300 p-1 outline-0",
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
		base: "group relative flex cursor-default select-none items-center gap-8 rounded-md px-2.5 py-1.5 text-sm will-change-transform forced-color-adjust-none",
		variants: {
			isSelected: {
				false: "text-neutral-700 -outline-offset-2 hover:bg-neutral-200",
				true: "bg-blue-600 text-white -outline-offset-4 outline-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:outline-[HighlightText] [&+[data-selected]]:rounded-t-none [&:has(+[data-selected])]:rounded-b-none",
			},
			isDisabled: {
				true: "text-neutral-300 forced-colors:text-[GrayText]",
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

	const textValue =
		props.textValue || (typeof props.children === "string" ? props.children : undefined);

	return (
		<AriaListboxItem<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return listboxItemStyles({ ...renderProps, className });
			})}
			textValue={textValue}
		>
			{composeRenderProps(children, (children) => {
				return (
					<Fragment>
						{children}
						<div className="absolute inset-x-4 bottom-0 hidden h-px bg-white/20 forced-colors:bg-[HighlightText] [.group[data-selected]:has(+[data-selected])_&]:block" />
					</Fragment>
				);
			})}
		</AriaListboxItem>
	);
});

export const dropdownItemStyles = variants({
	base: "group flex cursor-default select-none items-center gap-4 rounded-lg py-2 pl-3 pr-1 text-sm outline outline-0 forced-color-adjust-none",
	variants: {
		isDisabled: {
			false: "text-neutral-900",
			true: "text-neutral-300 forced-colors:text-[GrayText]",
		},
		isFocused: {
			true: "bg-blue-600 text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
		},
	},
});

export type DropdownItemStyles = VariantProps<typeof dropdownItemStyles>;

export interface DropdownItemProps<T extends object>
	extends AriaDropdownItemProps<T>,
		DropdownItemStyles {}

export const DropdownItem = forwardRef(function DropdownItem<T extends object>(
	props: DropdownItemProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaDropdownItem>>,
) {
	const { children, className, ...rest } = props;

	const textValue =
		props.textValue || (typeof props.children === "string" ? props.children : undefined);

	return (
		<AriaDropdownItem<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return dropdownItemStyles({ ...renderProps, className });
			})}
			textValue={textValue}
		>
			{composeRenderProps(children, (children, renderProps) => {
				const { isSelected } = renderProps;

				return (
					<Fragment>
						<span className="flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold">
							{children}
						</span>
						<span className="flex w-5 items-center">
							{isSelected ? <CheckIcon aria-hidden={true} className="size-4 shrink-0" /> : null}
						</span>
					</Fragment>
				);
			})}
		</AriaDropdownItem>
	);
});

export const dropdownSectionStyles = variants({
	base: "after:block after:h-[5px] after:content-[''] first:mt-[-5px]",
});

export type DropdownSectionStyles = VariantProps<typeof dropdownSectionStyles>;

export interface DropdownSectionProps<T extends object>
	extends AriaDropdownSectionProps<T>,
		DropdownSectionStyles {
	title?: string;
}

export const DropdownSection = forwardRef(function DropdownSection<T extends object>(
	props: DropdownSectionProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaDropdownSection>>,
) {
	const { children, className, items, title, ...rest } = props;

	return (
		<AriaDropdownSection<T>
			ref={forwardedRef}
			{...rest}
			className={dropdownSectionStyles({ className })}
		>
			<AriaHeader className="sticky top-[-5px] z-10 -mx-1 -mt-px truncate border-y bg-neutral-100/60 px-4 py-1 text-sm font-semibold text-neutral-500 backdrop-blur-md supports-[-moz-appearance:none]:bg-neutral-100 [&+*]:mt-1">
				{title}
			</AriaHeader>
			<AriaCollection items={items}>{children}</AriaCollection>
		</AriaDropdownSection>
	);
});
