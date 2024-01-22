"use client";

import { AlertTriangleIcon } from "lucide-react";
import { type ElementRef, Fragment } from "react";
import {
	composeRenderProps,
	Meter as AriaMeter,
	type MeterProps as AriaMeterProps,
} from "react-aria-components";

import { Label } from "@/components/label";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const meterStyles = variants({
	base: "flex flex-col gap-1",
});

export type MeterStyles = VariantProps<typeof meterStyles>;

export interface MeterProps extends AriaMeterProps, MeterStyles {
	label?: string;
}

export const Meter = forwardRef(function Meter(
	props: MeterProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaMeter>>,
) {
	const { children, className, label, ...rest } = props;

	return (
		<AriaMeter
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return meterStyles({ ...renderProps, className });
			})}
		>
			{(renderProps) => {
				const { percentage, valueText } = renderProps;

				return (
					<Fragment>
						<div className="flex justify-between gap-2">
							{label != null ? <Label>{label}</Label> : null}
							<span className={`text-sm ${percentage >= 80 ? "text-red-600" : "text-neutral-600"}`}>
								{percentage >= 80 && (
									<AlertTriangleIcon
										aria-label="Alert" // FIXME:
										className="inline-block size-4 shrink-0 align-text-bottom"
									/>
								)}
								{" " + valueText}
							</span>
						</div>
						<div className="relative h-2 w-64 rounded-full bg-neutral-300 outline outline-1 -outline-offset-1 outline-transparent">
							<div
								className={`absolute left-0 top-0 h-full rounded-full ${getColor(percentage)} forced-colors:bg-[Highlight]`}
								style={{ width: percentage + "%" }}
							/>
						</div>
					</Fragment>
				);
			}}
		</AriaMeter>
	);
});

function getColor(percentage: number) {
	if (percentage < 70) {
		return "bg-green-600";
	}

	if (percentage < 80) {
		return "bg-orange-500";
	}

	return "bg-red-600";
}
