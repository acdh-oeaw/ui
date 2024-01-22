"use client";

import type { ElementRef } from "react";
import {
	CalendarCell as AriaCalendarCell,
	CalendarGrid as AriaCalendarGrid,
	CalendarGridBody as AriaCalendarGridBody,
	type DateValue as AriaDateValue,
	RangeCalendar as AriaRangeCalendar,
	type RangeCalendarProps as AriaRangeCalendarProps,
	Text as AriaText,
} from "react-aria-components";

import { CalendarGridHeader, CalendarHeader } from "@/components/calendar";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const rangeCalendarStyles = variants({
	base: "",
});

export type RangeCalendarStyles = VariantProps<typeof rangeCalendarStyles>;

const _rangeCalendarCell = compose(
	focusRing,
	variants({
		base: "flex size-full items-center justify-center rounded-full text-neutral-900 forced-color-adjust-none",
		variants: {
			selectionState: {
				none: "group-hover:bg-neutral-100 group-pressed:bg-neutral-200",
				middle: [
					"group-hover:bg-blue-200 forced-colors:group-hover:bg-[Highlight]",
					"group-invalid:group-hover:bg-red-200 forced-colors:group-invalid:group-hover:bg-[Mark]",
					"group-pressed:bg-blue-300 forced-colors:text-[HighlightText] forced-colors:group-pressed:bg-[Highlight]",
					"group-invalid:group-pressed:bg-red-300 forced-colors:group-invalid:group-pressed:bg-[Mark]",
				],
				cap: "bg-blue-600 text-white group-invalid:bg-red-600 forced-colors:bg-[Highlight] forced-colors:text-[HighlightText] forced-colors:group-invalid:bg-[Mark]",
			},
			isDisabled: {
				true: "text-neutral-300 forced-colors:text-[GrayText]",
			},
		},
	}),
);

export interface RangeCalendarProps<T extends AriaDateValue>
	extends AriaRangeCalendarProps<T>,
		RangeCalendarStyles {
	errorMessage?: string;
}

export const RangeCalendar = forwardRef(function RangeCalendar<T extends AriaDateValue>(
	props: RangeCalendarProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaRangeCalendar>>,
) {
	const { children, className, errorMessage, ...rest } = props;

	return (
		<AriaRangeCalendar<T>
			ref={forwardedRef}
			{...rest}
			className={rangeCalendarStyles({ className })}
		>
			<CalendarHeader />
			<AriaCalendarGrid className="[&_td]:px-0">
				<CalendarGridHeader />
				<AriaCalendarGridBody>
					{(date) => {
						return (
							<AriaCalendarCell
								className="group size-9 cursor-default text-sm outline outline-0 outside-month:text-neutral-300 selected:bg-blue-100 invalid:selected:bg-red-100 selection-start:rounded-s-full selection-end:rounded-e-full forced-colors:selected:bg-[Highlight] forced-colors:invalid:selected:bg-[Mark] [td:first-child_&]:rounded-s-full [td:last-child_&]:rounded-e-full"
								date={date}
							>
								{(renderProps) => {
									const {
										formattedDate,
										isSelected,
										isSelectionStart,
										isSelectionEnd,
										isFocusVisible,
										isDisabled,
									} = renderProps;

									return (
										<span
											className={_rangeCalendarCell({
												selectionState:
													isSelected && (isSelectionStart || isSelectionEnd)
														? "cap"
														: isSelected
															? "middle"
															: "none",
												isDisabled,
												isFocusVisible,
											})}
										>
											{formattedDate}
										</span>
									);
								}}
							</AriaCalendarCell>
						);
					}}
				</AriaCalendarGridBody>
			</AriaCalendarGrid>
			{errorMessage != null ? (
				<AriaText className="text-sm text-red-600" slot="errorMessage">
					{errorMessage}
				</AriaText>
			) : null}
		</AriaRangeCalendar>
	);
});
