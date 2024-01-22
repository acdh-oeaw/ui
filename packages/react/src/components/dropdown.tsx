"use client";

import { CheckIcon } from "lucide-react";
import { type ElementRef, Fragment } from "react";
import {
	Collection as AriaCollection,
	composeRenderProps,
	Header as AriaHeader,
	ListBoxItem as AriaDropdownItem,
	type ListBoxItemProps as AriaDropdownItemProps,
	Section as AriaDropdownSection,
	type SectionProps as AriaDropdownSectionProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const dropdownItemStyles = variants({
	base: "group flex cursor-default select-none items-center gap-4 rounded-md py-1.5 pl-3 pr-2 text-sm outline outline-0 forced-color-adjust-none",
	variants: {
		isDisabled: {
			false: "text-foreground",
			true: "forced-colors:text-[GrayText]",
		},
		isFocused: {
			true: "bg-primary text-primary-foreground forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
		},
		isOpen: {
			true: "",
		},
	},
	compoundVariants: [
		{
			isFocused: false,
			isOpen: true,
			className: "bg-muted",
		},
	],
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

	const textValue = typeof props.children === "string" ? props.children : undefined;

	return (
		<AriaDropdownItem<T>
			ref={forwardedRef}
			textValue={textValue}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return dropdownItemStyles({ ...renderProps, className });
			})}
		>
			{composeRenderProps(children, (children, renderProps) => {
				const { isSelected } = renderProps;

				return (
					<Fragment>
						<span className="flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold">
							{children}
						</span>
						<span className="flex w-4 items-center">
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
			<AriaHeader className="sticky top-[-5px] z-10 -mx-1 -mt-px truncate border-y bg-muted px-4 py-1 text-sm font-semibold text-muted-foreground backdrop-blur-md supports-[-moz-appearance:none]:bg-muted [&+*]:mt-1">
				{title}
			</AriaHeader>
			<AriaCollection items={items}>{children}</AriaCollection>
		</AriaDropdownSection>
	);
});
