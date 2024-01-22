"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	DateField as AriaDateField,
	type DateFieldProps as AriaDateFieldProps,
	DateInput as AriaDateInput,
	type DateInputProps as AriaDateInputProps,
	DateSegment as AriaDateSegment,
	type DateValue as AriaDateValue,
} from "react-aria-components";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { fieldGroupStyles } from "@/components/field-group";
import { Label } from "@/components/label";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import type { FieldProps } from "@/types/field";

export const dateFieldStyles = variants({
	base: "flex flex-col gap-1",
});

export type DateFieldStyles = VariantProps<typeof dateFieldStyles>;

export interface DateFieldProps<T extends AriaDateValue>
	extends AriaDateFieldProps<T>,
		FieldProps,
		DateFieldStyles {}

export const DateField = forwardRef(function DateField<T extends AriaDateValue>(
	props: DateFieldProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaDateField>>,
) {
	const { children, className, description, errorMessage, label, ...rest } = props;

	return (
		<AriaDateField<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return dateFieldStyles({ ...renderProps, className });
			})}
		>
			{label != null ? <Label>{label}</Label> : null}
			<DateInput />
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
		</AriaDateField>
	);
});

export const dateInputStyles = compose(
	fieldGroupStyles,
	variants({
		base: "block min-w-[150px] px-2 py-1.5 text-sm",
	}),
);

export type DateInputStyles = VariantProps<typeof dateInputStyles>;

const _dateSegmentStyles = variants({
	base: "inline rounded p-0.5 text-neutral-800 caret-transparent outline outline-0 forced-color-adjust-none type-literal:px-0 forced-colors:text-[ButtonText]",
	variants: {
		isPlaceholder: {
			true: "italic text-neutral-600",
		},
		isDisabled: {
			true: "text-neutral-200 forced-colors:text-[GrayText]",
		},
		isFocused: {
			true: "bg-blue-600 text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
		},
	},
});

export interface DateInputProps extends AriaDateInputProps, DateInputStyles {}

export const DateInput = forwardRef(function DateInput(
	props: DateInputProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaDateInput>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaDateInput
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return dateInputStyles({ ...renderProps, className });
			})}
		>
			{(segment) => {
				return <AriaDateSegment segment={segment} className={_dateSegmentStyles} />;
			}}
		</AriaDateInput>
	);
});
