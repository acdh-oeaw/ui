"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	ProgressBar as AriaProgressBar,
	type ProgressBarProps as AriaProgressBarProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const progressCircleStyles = styles({
	base: [],
	variants: {
		size: {
			sm: [],
			md: [],
			lg: [],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type ProgressCircleStylesProps = GetVariantProps<typeof progressCircleStyles>;

export interface ProgressCircleProps extends AriaProgressBarProps, ProgressCircleStylesProps {}

export function ProgressCircle(props: Readonly<ProgressCircleProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaProgressBar
			{...rest}
			className={composeRenderProps(className, (className) => {
				return progressCircleStyles({ className, size });
			})}
		>
			{children}
		</AriaProgressBar>
	);
}
