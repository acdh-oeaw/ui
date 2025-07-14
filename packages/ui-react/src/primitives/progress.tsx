"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	ProgressBar as AriaProgressBar,
	type ProgressBarProps as AriaProgressBarProps,
} from "react-aria-components";

export interface ProgressProps extends AriaProgressBarProps {}

export function Progress(props: Readonly<ProgressProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaProgressBar
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn([], className);
			})}
		>
			{children}
		</AriaProgressBar>
	);
}
