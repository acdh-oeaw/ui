"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import { Text as AriaText, type TextProps as AriaTextProps } from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const fielddescriptionStyles = styles({
	base: ["text-text-weak"],
	variants: {
		size: {
			sm: ["text-sm/5"],
			md: ["text-sm/5"],
			lg: ["text-base/6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type FieldDescriptionStylesProps = GetVariantProps<typeof fielddescriptionStyles>;

export interface FieldDescriptionProps
	extends Omit<AriaTextProps, "slot">,
		FieldDescriptionStylesProps {}

export function FieldDescription(props: Readonly<FieldDescriptionProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	if (children == null) {
		return null;
	}

	return (
		<AriaText {...rest} className={fielddescriptionStyles({ className, size })} slot="description">
			{children}
		</AriaText>
	);
}
