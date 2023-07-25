"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import { Label as AriaLabel, type LabelProps as AriaLabelProps } from "react-aria-components";

export interface LabelProps extends AriaLabelProps {}

export function Label(props: Readonly<LabelProps>): ReactNode {
	const { children, className, ...rest } = props;

	if (children == null) {
		return null;
	}

	return (
		<AriaLabel {...rest} className={cn(["text-sm font-strong text-text-strong"], className)}>
			{children}
		</AriaLabel>
	);
}
