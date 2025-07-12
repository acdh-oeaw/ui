"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import { ChevronDownIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Icon, type IconProps } from "@/src/primitives/icon";
import { useStylesContext } from "@/src/primitives/styles-context";

export const selectTriggerIconStyles = styles({
	base: ["my-auto"],
	variants: {
		size: {
			sm: ["mx-2.5"],
			md: ["mx-3"],
			lg: ["mx-3.5"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type SelectTriggerIconStylesProps = GetVariantProps<typeof selectTriggerIconStyles>;

export interface SelectTriggerIconProps extends Omit<IconProps, "children"> {}

export function SelectTriggerIcon(props: Readonly<SelectTriggerIconProps>): ReactNode {
	const { className, size, ...rest } = useStylesContext(props);

	return (
		<Icon {...rest} className={selectTriggerIconStyles({ className, size })}>
			<ChevronDownIcon />
		</Icon>
	);
}
