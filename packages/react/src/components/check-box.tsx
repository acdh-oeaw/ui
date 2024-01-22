import type { ComponentPropsWithoutRef, ElementRef } from "react";
import {
	Checkbox as AriaCheckBox,
	CheckboxGroup as AriaCheckBoxGroup,
	type CheckboxGroupProps as AriaCheckBoxGroupProps,
	type CheckboxProps as AriaCheckBoxProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const checkBoxGroupStyles = variants({
	base: ["group grid content-start items-start gap-y-1.5"],
});

export type CheckBoxGroupStyles = VariantProps<typeof checkBoxGroupStyles>;

export interface CheckBoxGroupProps extends AriaCheckBoxGroupProps, CheckBoxGroupStyles {}

export const CheckBoxGroup = forwardRef(function CheckBoxGroup(
	props: CheckBoxGroupProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaCheckBoxGroup>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaCheckBoxGroup ref={forwardedRef} {...rest} className={checkBoxGroupStyles({ className })}>
			{children}
		</AriaCheckBoxGroup>
	);
});

export const checkBoxStyles = variants({
	base: [],
});

export type CheckBoxStyles = VariantProps<typeof checkBoxStyles>;

export interface CheckBoxProps extends AriaCheckBoxProps, CheckBoxStyles {}

export const CheckBox = forwardRef(function CheckBox(
	props: CheckBoxProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaCheckBox>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaCheckBox ref={forwardedRef} {...rest} className={checkBoxStyles({ className })}>
			{children}
		</AriaCheckBox>
	);
});

export const checkBoxBoxStyles = variants({
	base: [],
});

export type CheckBoxBoxStyles = VariantProps<typeof checkBoxBoxStyles>;

export interface CheckBoxBoxProps extends ComponentPropsWithoutRef<"div">, CheckBoxBoxStyles {}

export const CheckBoxBox = forwardRef(function CheckBoxBox(
	props: CheckBoxBoxProps,
	forwardedRef: ForwardedRef<ElementRef<"div">>,
) {
	const { children, className, ...rest } = props;

	return (
		<div ref={forwardedRef} {...rest} className={checkBoxBoxStyles({ className })}>
			{children}
		</div>
	);
});
