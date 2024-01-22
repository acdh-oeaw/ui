"use client";

import { CalendarIcon } from "lucide-react";
import type { ElementRef } from "react";
import {
	composeRenderProps,
	DateRangePicker as AriaDateRangePicker,
	type DateRangePickerProps as AriaDateRangePickerProps,
	type DateValue as AriaDateValue,
} from "react-aria-components";

import { Button } from "@/components/button";
import { DateInput } from "@/components/date-field";
import { Dialog } from "@/components/dialog";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { FieldGroup } from "@/components/field-group";
import { Label } from "@/components/label";
import { Popover } from "@/components/popover";
import { RangeCalendar } from "@/components/range-calendar";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";
import type { FieldProps } from "@/types/field";

export const dateRangePickerStyles = variants({
	base: "group flex flex-col gap-1",
});

export type DateRangePickerStyles = VariantProps<typeof dateRangePickerStyles>;

export interface DateRangePickerProps<T extends AriaDateValue>
	extends AriaDateRangePickerProps<T>,
		FieldProps,
		DateRangePickerStyles {}

export const DateRangePicker = forwardRef(function DateRangePicker<T extends AriaDateValue>(
	props: DateRangePickerProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaDateRangePicker>>,
) {
	const { children, className, description, errorMessage, label, ...rest } = props;

	return (
		<AriaDateRangePicker<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return dateRangePickerStyles({ ...renderProps, className });
			})}
		>
			{label != null ? <Label>{label}</Label> : null}
			<FieldGroup className="w-auto min-w-[208px]">
				<DateInput slot="start" className="px-2 py-1.5 text-sm" />
				<span
					aria-hidden="true"
					className="text-neutral-800 group-disabled:text-neutral-200 forced-colors:text-[ButtonText] group-disabled:forced-colors:text-[GrayText]"
				>
					–
				</span>
				<DateInput slot="end" className="flex-1 px-2 py-1.5 text-sm" />
				<Button variant="icon" className="mr-1 w-6 rounded outline-offset-0">
					<CalendarIcon aria-hidden={true} className="size-4 shrink-0" />
				</Button>
			</FieldGroup>
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
			<Popover>
				<Dialog>
					<RangeCalendar />
				</Dialog>
			</Popover>
		</AriaDateRangePicker>
	);
});
