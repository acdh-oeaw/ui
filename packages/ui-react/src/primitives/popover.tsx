"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	Popover as AriaPopover,
	type PopoverProps as AriaPopoverProps,
} from "react-aria-components";

export interface PopoverProps extends AriaPopoverProps {}

export function Popover(props: Readonly<PopoverProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaPopover
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn(
					[
						"min-w-[var(--ui-trigger-width,_var(--trigger-width))] rounded-sm border border-stroke-weak bg-background-overlay shadow-overlay",
					],
					className,
				);
			})}
		>
			{children}
		</AriaPopover>
	);
}
