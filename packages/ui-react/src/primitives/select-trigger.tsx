"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";

import { useStylesContext } from "@/src/primitives/styles-context";

export const selectTriggerStyles = styles({
	base: ["inline-grid place-items-center self-stretch"],
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
}

export function SelectTrigger(props: Readonly<SelectTriggerProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<span {...rest} className={selectTriggerStyles({ className, size })}>
			{children}
		</span>
	);
}
