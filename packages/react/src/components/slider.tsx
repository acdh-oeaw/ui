"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	Slider as AriaSlider,
	SliderOutput as AriaSliderOutput,
	type SliderProps as AriaSliderProps,
	SliderThumb as AriaSliderThumb,
	SliderTrack as AriaSliderTrack,
} from "react-aria-components";

import { Label } from "@/components/label";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const sliderStyles = variants({
	base: "grid-cols-[1fr_auto] flex-col items-center gap-2 orientation-horizontal:grid orientation-horizontal:w-64 orientation-vertical:flex",
});

export type SliderStyles = VariantProps<typeof sliderStyles>;

const _sliderTrackStyles = variants({
	base: "rounded-full",
	variants: {
		orientation: {
			horizontal: "h-[6px] w-full",
			vertical: "ml-[50%] h-full w-[6px] -translate-x-1/2",
		},
		isDisabled: {
			false: "bg-neutral-300 forced-colors:bg-[ButtonBorder]",
			true: "bg-neutral-100 forced-colors:bg-[GrayText]",
		},
	},
});

const _sliderThumbStyles = compose(
	focusRing,
	variants({
		base: "size-6 rounded-full border-2 border-neutral-700 bg-neutral-50 group-orientation-horizontal:mt-6 group-orientation-vertical:ml-3",
		variants: {
			isDragging: {
				true: "bg-neutral-700 forced-colors:bg-[ButtonBorder]",
			},
			isDisabled: {
				true: "border-neutral-300 forced-colors:border-[GrayText]",
			},
		},
	}),
);

export interface SliderProps<T extends Array<number> | number>
	extends AriaSliderProps<T>,
		SliderStyles {
	label?: string;
	thumbLabels?: Array<string>;
}

export const Slider = forwardRef(function Slider<T extends Array<number> | number>(
	props: SliderProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaSlider>>,
) {
	const { children, className, label, thumbLabels, ...rest } = props;

	return (
		<AriaSlider<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return sliderStyles({ ...renderProps, className });
			})}
		>
			{label != null ? <Label>{label}</Label> : null}
			<AriaSliderOutput className="text-sm font-medium text-neutral-500 orientation-vertical:hidden">
				{({ state }) => {
					return state.values
						.map((_, i) => {
							return state.getThumbValueLabel(i);
						})
						.join(" – ");
				}}
			</AriaSliderOutput>
			<AriaSliderTrack className="group col-span-2 flex items-center orientation-horizontal:h-6 orientation-vertical:h-64 orientation-vertical:w-6">
				{(renderProps) => {
					const { state, ...rest } = renderProps;
					return (
						<>
							<div className={_sliderTrackStyles(rest)} />
							{state.values.map((_, i) => {
								return (
									<AriaSliderThumb
										key={i}
										index={i}
										aria-label={thumbLabels?.[i]}
										className={_sliderThumbStyles}
									/>
								);
							})}
						</>
					);
				}}
			</AriaSliderTrack>
		</AriaSlider>
	);
});
