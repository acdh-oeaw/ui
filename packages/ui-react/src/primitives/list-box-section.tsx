"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	ListBoxSection as AriaListBoxSection,
	type ListBoxSectionProps as AriaListBoxSectionProps,
} from "react-aria-components";

export interface ListBoxSectionProps<T extends object>
	extends Pick<AriaListBoxSectionProps<T>, "aria-label" | "className"> {
	children: ReactNode;
}

export function ListBoxSection<T extends object>(
	props: Readonly<ListBoxSectionProps<T>>,
): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaListBoxSection {...rest} className={cn(["flex flex-col"], className)}>
			{children}
		</AriaListBoxSection>
	);
}
