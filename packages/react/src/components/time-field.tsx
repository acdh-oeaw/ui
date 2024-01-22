"use client";

import type { ElementRef } from "react";
import {
	TimeField as AriaTimeField,
	type TimeFieldProps as AriaTimeFieldProps,
	type TimeValue as AriaTimeValue,
} from "react-aria-components";

import { DateInput } from "@/components/date-field";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";
import type { FieldProps } from "@/types/field";

export const timeFieldStyles = variants({
	base: "",
});

export type TimeFieldStyles = VariantProps<typeof timeFieldStyles>;

export interface TimeFieldProps<T extends AriaTimeValue>
	extends AriaTimeFieldProps<T>,
		FieldProps,
		TimeFieldStyles {}

export const TimeField = forwardRef(function TimeField<T extends AriaTimeValue>(
	props: TimeFieldProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTimeField>>,
) {
	const { children, className, description, errorMessage, label, ...rest } = props;

	return (
		<AriaTimeField<T> ref={forwardedRef} {...rest} className={timeFieldStyles({ className })}>
			{label != null ? <Label>{label}</Label> : null}
			<DateInput />
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
		</AriaTimeField>
	);
});
