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

	// const popoverContext = useSlottedContext(PopoverContext)!;
	// const isSubmenu = popoverContext?.trigger === "SubmenuTrigger";
	// let offset = showArrow ? 12 : 8;
	// offset = isSubmenu ? offset - 6 : offset;

	return (
		<AriaPopover
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn(
					[
						"min-w-[var(--ui-trigger-width,_var(--trigger-width))] overflow-hidden rounded-weak border border-stroke-weak bg-background-overlay text-text-strong shadow-overlay",
						"entering:animate-in entering:duration-200 entering:ease-out entering:fade-in entering:placement-left:slide-in-from-right-1 entering:placement-right:slide-in-from-left-1 entering:placement-top:slide-in-from-bottom-1 entering:placement-bottom:slide-in-from-top-1",
						"exiting:animate-out exiting:duration-150 exiting:ease-in exiting:fade-out exiting:placement-left:slide-out-to-right-1 exiting:placement-right:slide-out-to-left-1 exiting:placement-top:slide-out-to-bottom-1 exiting:placement-bottom:slide-out-to-top-1",
					],
					className,
				);
			})}
		>
			{children}
		</AriaPopover>
	);
}
