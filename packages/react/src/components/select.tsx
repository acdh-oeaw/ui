"use client";

import { ChevronDownIcon } from "lucide-react";
import { type ElementRef, Fragment } from "react";
import {
	Button as AriaSelectTrigger,
	type ButtonProps as AriaSelectTriggerProps,
	composeRenderProps,
	Select as AriaSelect,
	type SelectProps as AriaSelectProps,
	SelectValue as AriaSelectValue,
	type SelectValueProps as AriaSelectValueProps,
} from "react-aria-components";

import {
	DropdownItem,
	type DropdownItemProps,
	DropdownSection,
	type DropdownSectionProps,
} from "@/components/dropdown";
import { Listbox, type ListboxProps } from "@/components/listbox";
import { Popover, type PopoverProps } from "@/components/popover";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const selectStyles = variants({
	base: "group flex flex-col gap-1.5",
});

export type SelectStyles = VariantProps<typeof selectStyles>;

export interface SelectProps<T extends object> extends AriaSelectProps<T>, SelectStyles {}

export const Select = forwardRef(function Select<T extends object>(
	props: SelectProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaSelect>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaSelect<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return selectStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaSelect>
	);
});

export const selectTriggerStyles = compose(
	focusRing,
	variants({
		base: "flex h-9 w-full min-w-[150px] cursor-default items-center gap-4 whitespace-nowrap rounded-md border-2 border-input py-1.5 pl-3 pr-2 text-start text-sm shadow-sm transition",
		variants: {
			isDisabled: {
				false:
					"group-invalid:border-negative hover:border-foreground pressed:border-foreground/90 forced-colors:group-invalid:border-[Mark]",
				true: "cursor-not-allowed opacity-50 forced-colors:border-[GrayText] forced-colors:text-[GrayText]",
			},
		},
	}),
);

export type SelectTriggerStyles = VariantProps<typeof selectTriggerStyles>;

export interface SelectTriggerProps extends AriaSelectTriggerProps, SelectTriggerStyles {}

export const SelectTrigger = forwardRef(function SelectTrigger(
	props: SelectTriggerProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaSelectTrigger>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaSelectTrigger
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return selectTriggerStyles({ ...renderProps, className });
			})}
		>
			{composeRenderProps(children, (children, renderProps) => {
				return (
					<Fragment>
						{children}
						<ChevronDownIcon
							aria-hidden={true}
							className="size-4 shrink-0 text-muted-foreground forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
						/>
					</Fragment>
				);
			})}
		</AriaSelectTrigger>
	);
});

export const selectValueStyles = variants({
	base: "flex-1 text-sm placeholder-shown:italic placeholder-shown:text-muted-foreground",
});

export type SelectValueStyles = VariantProps<typeof selectValueStyles>;

export interface SelectValueProps<T extends object>
	extends AriaSelectValueProps<T>,
		SelectValueStyles {}

export const SelectValue = forwardRef(function SelectValue<T extends object>(
	props: SelectValueProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaSelectValue>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaSelectValue
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return selectValueStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaSelectValue>
	);
});

export const selectPopoverStyles = variants({
	base: "min-w-[--trigger-width]",
});

export type SelectPopoverStyles = VariantProps<typeof selectPopoverStyles>;

export interface SelectPopoverProps extends PopoverProps, SelectPopoverStyles {}

export const SelectPopover = forwardRef(function SelectPopover(
	props: SelectPopoverProps,
	forwardedRef: ForwardedRef<ElementRef<typeof Popover>>,
) {
	const { children, className, ...rest } = props;

	return (
		<Popover ref={forwardedRef} {...rest} className={selectPopoverStyles({ className })}>
			{children}
		</Popover>
	);
});

export const selectListboxStyles = variants({
	base: "max-h-[inherit] overflow-auto p-1 outline-none",
});

export type SelectListboxStyles = VariantProps<typeof selectListboxStyles>;

export interface SelectListboxProps<T extends object>
	extends ListboxProps<T>,
		SelectListboxStyles {}

export const SelectListbox = forwardRef(function SelectListbox<T extends object>(
	props: SelectListboxProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof Listbox>>,
) {
	const { children, className, ...rest } = props;

	return (
		<Listbox<T> ref={forwardedRef} {...rest} className={selectListboxStyles({ className })}>
			{children}
		</Listbox>
	);
});

export interface SelectItemProps<T extends object> extends DropdownItemProps<T> {}

export const SelectItem = DropdownItem;

export interface SelectSectionProps<T extends object> extends DropdownSectionProps<T> {}

export const SelectSection = DropdownSection;
