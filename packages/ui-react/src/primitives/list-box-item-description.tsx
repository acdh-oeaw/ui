"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import { Text as AriaText, type TextProps as AriaTextProps } from "react-aria-components";

export interface ListBoxItemDescriptionProps extends Omit<AriaTextProps, "slot"> {}

export function ListBoxItemDescription(props: Readonly<ListBoxItemDescriptionProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaText {...rest} className={cn(["text-sm text-text-weak"], className)} slot="description">
			{children}
		</AriaText>
	);
}
