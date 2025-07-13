"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import { Text as AriaText, type TextProps as AriaTextProps } from "react-aria-components";

export interface ListBoxItemLabelProps extends Omit<AriaTextProps, "slot"> {}

export function ListBoxItemLabel(props: Readonly<ListBoxItemLabelProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaText {...rest} className={cn(["text-text-strong"], className)} slot="label">
			{children}
		</AriaText>
	);
}
