"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import {
	Calendar as AriaCalendar,
	CalendarCell as AriaCalendarCell,
	CalendarGrid as AriaCalendarGrid,
	CalendarGridBody as AriaCalendarGridBody,
	CalendarGridHeader as AriaCalendarGridHeader,
	type CalendarGridHeaderProps as AriaCalendarGridHeaderProps,
	CalendarHeaderCell as AriaCalendarHeaderCell,
	type CalendarProps as AriaCalendarProps,
	type DateValue as AriaDateValue,
	Heading as AriaHeading,
	Text as AriaText,
	useLocale,
} from "react-aria-components";

import { Button } from "@/components/button";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const calendarStyles = variants({
	base: "",
});

export type CalendarStyles = VariantProps<typeof calendarStyles>;

const _calendarCellStyles = compose(
	focusRing,
	variants({
		base: "flex size-9 cursor-default items-center justify-center rounded-full text-sm forced-color-adjust-none",
		variants: {
			isSelected: {
				false: "text-neutral-900 hover:bg-neutral-100 pressed:bg-neutral-200",
				true: "bg-blue-600 text-white invalid:bg-red-600 forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:invalid:bg-[Mark]",
			},
			isDisabled: {
				true: "text-neutral-300 forced-colors:text-[GrayText]",
			},
		},
	}),
);

export interface CalendarProps<T extends AriaDateValue>
	extends AriaCalendarProps<T>,
		CalendarStyles {
	errorMessage?: string;
}

export const Calendar = forwardRef(function Calendar<T extends AriaDateValue>(
	props: CalendarProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaCalendar>>,
) {
	const { children, className, errorMessage, ...rest } = props;

	return (
		<AriaCalendar<T> ref={forwardedRef} {...rest} className={calendarStyles({ className })}>
			<CalendarHeader />
			<AriaCalendarGrid>
				<CalendarGridHeader />
				<AriaCalendarGridBody>
					{(date) => {
						return <AriaCalendarCell className={_calendarCellStyles} date={date} />;
					}}
				</AriaCalendarGridBody>
			</AriaCalendarGrid>
			{errorMessage != null ? (
				<AriaText className="text-sm text-red-600" slot="errorMessage">
					{errorMessage}
				</AriaText>
			) : null}
		</AriaCalendar>
	);
});

// FIXME: props.description? errormessage function?

export const calendarHeaderStyles = variants({
	base: "flex w-full items-center gap-1 px-1 pb-4",
});

export type CalendarHeaderStyles = VariantProps<typeof calendarHeaderStyles>;

export interface CalendarHeaderProps
	extends ComponentPropsWithoutRef<"header">,
		CalendarHeaderStyles {}

export const CalendarHeader = forwardRef(function CalendarHeader(
	props: CalendarHeaderProps,
	forwardedRef: ForwardedRef<ElementRef<"header">>,
) {
	const { children, className, ...rest } = props;

	const { direction } = useLocale();

	return (
		<header ref={forwardedRef} {...rest} className={calendarHeaderStyles({ className })}>
			<Button slot="previous" variant="icon">
				{direction === "rtl" ? (
					<ChevronRightIcon aria-hidden={true} className="shrink-0" />
				) : (
					<ChevronLeftIcon aria-hidden={true} className="shrink-0" />
				)}
			</Button>
			<AriaHeading className="mx-2 flex-1 text-center text-xl font-semibold text-neutral-900" />
			<Button slot="next" variant="icon">
				{direction === "rtl" ? (
					<ChevronLeftIcon aria-hidden={true} className="shrink-0" />
				) : (
					<ChevronRightIcon aria-hidden={true} className="shrink-0" />
				)}
			</Button>
		</header>
	);
});

export const calendarGridHeaderStyles = variants({
	base: "",
});

export type CalendarGridHeaderStyles = VariantProps<typeof calendarGridHeaderStyles>;

export interface CalendarGridHeaderProps
	extends AriaCalendarGridHeaderProps,
		CalendarGridHeaderStyles {}

export const CalendarGridHeader = forwardRef(function CalendarGridHeader(
	props: CalendarGridHeaderProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaCalendarGridHeader>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaCalendarGridHeader
			ref={forwardedRef}
			{...rest}
			className={calendarGridHeaderStyles({ className })}
		>
			{(day) => {
				return (
					<AriaCalendarHeaderCell className="text-xs font-semibold text-neutral-500">
						{day}
					</AriaCalendarHeaderCell>
				);
			}}
		</AriaCalendarGridHeader>
	);
});
