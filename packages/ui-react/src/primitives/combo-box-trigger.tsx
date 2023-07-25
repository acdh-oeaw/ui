"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from "react-aria-components";

export interface ComboBoxTriggerProps extends AriaButtonProps {}

export function ComboBoxTrigger(props: Readonly<ComboBoxTriggerProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaButton
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn(["my-auto inline-grid h-full place-items-center outline-hidden"], className);
			})}
		>
			{children}
		</AriaButton>
	);
}
