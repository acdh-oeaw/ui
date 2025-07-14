"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";

import { useFieldContext } from "@/src/primitives/field-context";
import { useStylesContext } from "@/src/primitives/styles-context";

export const selectTriggerStyles = styles({
	base: ["inline-grid shrink-0 place-items-center self-stretch"],
	variants: {
		size: {
			sm: ["px-2"],
			md: ["px-2"],
			lg: ["px-2"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type SelectTriggerStylesProps = GetVariantProps<typeof selectTriggerStyles>;

export interface SelectTriggerProps extends SelectTriggerStylesProps {
	children: ReactNode;
	className?: string;
	isDisabled?: boolean;
}

export function SelectTrigger(props: Readonly<SelectTriggerProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	const { isDisabled } = useFieldContext(props);

	return (
		<span
			{...rest}
			className={selectTriggerStyles({ className, size })}
			data-disabled={isDisabled === true || undefined}
			data-rac={true}
		>
			{children}
		</span>
	);
}
