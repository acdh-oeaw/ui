"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import { Label as AriaLabel, type LabelProps as AriaLabelProps } from "react-aria-components";

import { useFieldContext } from "@/src/primitives/field-context";
import { useStylesContext } from "@/src/primitives/styles-context";

export const labelStyles = styles({
	base: ["font-strong text-text-strong disabled:text-text-disabled"],
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

export type LabelStylesProps = GetVariantProps<typeof labelStyles>;

export interface LabelProps extends AriaLabelProps, LabelStylesProps {
	isDisabled?: boolean;
}

export function Label(props: Readonly<LabelProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	const { isDisabled } = useFieldContext(props);

	if (children == null) {
		return null;
	}

	return (
		<AriaLabel
			{...rest}
			className={labelStyles({ className, size })}
			data-disabled={isDisabled === true || undefined}
		>
			{children}
		</AriaLabel>
	);
}
