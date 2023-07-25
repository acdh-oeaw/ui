"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import { Text as AriaText, type TextProps as AriaTextProps } from "react-aria-components";

export interface FieldDescriptionProps extends Omit<AriaTextProps, "slot"> {}

export function FieldDescription(props: Readonly<FieldDescriptionProps>): ReactNode {
	const { children, className, ...rest } = props;

	if (children == null) {
		return null;
	}

	return (
		<AriaText {...rest} className={cn(["text-sm text-text-weak"], className)} slot="description">
			{children}
		</AriaText>
	);
}
