"use client";

import { CheckIcon, MinusIcon } from "lucide-react";
import { type ElementRef, Fragment, type ReactNode } from "react";
import {
	Checkbox as AriaCheckbox,
	CheckboxGroup as AriaCheckboxGroup,
	type CheckboxGroupProps as AriaCheckboxGroupProps,
	type CheckboxProps as AriaCheckboxProps,
	composeRenderProps,
} from "react-aria-components";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";
import type { FieldProps } from "@/types/field";

export const checkboxGroupStyles = variants({
	base: "flex flex-col gap-2",
});

export type CheckboxGroupStyles = VariantProps<typeof checkboxGroupStyles>;

export interface CheckboxGroupProps
	extends Omit<AriaCheckboxGroupProps, "children">,
		FieldProps,
		CheckboxGroupStyles {
	children?: ReactNode;
}

export const CheckboxGroup = forwardRef(function CheckboxGroup(
	props: CheckboxGroupProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaCheckboxGroup>>,
) {
	const { children, className, description, errorMessage, label, ...rest } = props;

	return (
		<AriaCheckboxGroup
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return checkboxGroupStyles({ ...renderProps, className });
			})}
		>
			{label != null ? <Label>{label}</Label> : null}
			{children}
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
		</AriaCheckboxGroup>
	);
});

export const checkboxStyles = variants({
	base: "group flex items-center gap-2 text-sm transition",
	variants: {
		isDisabled: {
			false: "text-neutral-800",
			true: "text-neutral-300 forced-colors:text-[GrayText]",
		},
	},
});

const _checkboxBoxStyles = compose(
	focusRing,
	variants({
		base: "flex size-5 flex-shrink-0 items-center justify-center rounded border-2 transition",
		variants: {
			isSelected: {
				false:
					"border-[--color] bg-white [--color:theme(colors.neutral.400)] group-pressed:[--color:theme(colors.neutral.500)]",
				true: "border-[--color] bg-[--color] [--color:theme(colors.neutral.700)] group-pressed:[--color:theme(colors.neutral.800)] forced-colors:![--color:Highlight]",
			},
			isInvalid: {
				true: "[--color:theme(colors.red.700)] group-pressed:[--color:theme(colors.red.800)] forced-colors:![--color:Mark]",
			},
			isDisabled: {
				true: "[--color:theme(colors.neutral.200)] forced-colors:![--color:GrayText]",
			},
		},
	}),
);

const _checkboxIconStyles = variants({
	base: "size-4 shrink-0 text-white group-disabled:text-neutral-400 forced-colors:text-[HighlightText]",
});

export type CheckboxStyles = VariantProps<typeof checkboxStyles>;

export interface CheckboxProps extends AriaCheckboxProps, CheckboxStyles {}

export const Checkbox = forwardRef(function Checkbox(
	props: CheckboxProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaCheckbox>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaCheckbox
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return checkboxStyles({ ...renderProps, className });
			})}
		>
			{composeRenderProps(children, (children, renderProps) => {
				const { isSelected, isIndeterminate } = renderProps;

				return (
					<Fragment>
						<div
							className={_checkboxBoxStyles({
								...renderProps,
								isSelected: isSelected || isIndeterminate,
							})}
						>
							{isIndeterminate ? (
								<MinusIcon aria-hidden className={_checkboxIconStyles()} />
							) : isSelected ? (
								<CheckIcon aria-hidden className={_checkboxIconStyles()} />
							) : null}
						</div>
						{children}
					</Fragment>
				);
			})}
		</AriaCheckbox>
	);
});
