"use client";

import { CalendarIcon } from "lucide-react";
import type { ElementRef } from "react";
import {
	composeRenderProps,
	DatePicker as AriaDatePicker,
	type DatePickerProps as AriaDatePickerProps,
	type DateValue as AriaDateValue,
} from "react-aria-components";

import { Button } from "@/components/button";
import { Calendar } from "@/components/calendar";
import { DateInput } from "@/components/date-field";
import { Dialog } from "@/components/dialog";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { FieldGroup } from "@/components/field-group";
import { Label } from "@/components/label";
import { Popover } from "@/components/popover";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";
import type { FieldProps } from "@/types/field";

export const datePickerStyles = variants({
	base: "group flex flex-col gap-1",
});

export type DatePickerStyles = VariantProps<typeof datePickerStyles>;

export interface DatePickerProps<T extends AriaDateValue>
	extends AriaDatePickerProps<T>,
		FieldProps,
		DatePickerStyles {}

export const DatePicker = forwardRef(function DatePicker<T extends AriaDateValue>(
	props: DatePickerProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaDatePicker>>,
) {
	const { children, className, description, errorMessage, label, ...rest } = props;

	return (
		<AriaDatePicker<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return datePickerStyles({ ...renderProps, className });
			})}
		>
			{label != null && <Label>{label}</Label>}
			<FieldGroup className="w-auto min-w-[208px]">
				<DateInput className="min-w-[150px] flex-1 px-2 py-1.5 text-sm" />
				<Button variant="icon" className="mr-1 w-6 rounded outline-offset-0">
					<CalendarIcon aria-hidden={true} className="size-4 shrink-0" />
				</Button>
			</FieldGroup>
			{description != null && <FieldDescription>{description}</FieldDescription>}
			<FieldError>{errorMessage}</FieldError>
			<Popover>
				<Dialog>
					<Calendar />
				</Dialog>
			</Popover>
		</AriaDatePicker>
	);
});
