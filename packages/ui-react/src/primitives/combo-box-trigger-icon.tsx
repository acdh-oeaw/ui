"use client";

import { cn } from "@acdh-oeaw/style-variants";
import { ChevronDownIcon } from "lucide-react";
import type { ReactNode } from "react";

import { useFieldContext } from "@/src/primitives/field-context";
import { Icon, type IconProps } from "@/src/primitives/icon";
import { useStylesContext } from "@/src/primitives/styles-context";

export interface ComboBoxTriggerIconProps extends Omit<IconProps, "children" | "size"> {}

export function ComboBoxTriggerIcon(props: Readonly<ComboBoxTriggerIconProps>): ReactNode {
	const { className, ...rest } = useStylesContext(props);

	const { isDisabled } = useFieldContext(props);

	return (
		<Icon {...rest} className={cn(["p-0.75"], className)} isDisabled={isDisabled} size="line">
			<ChevronDownIcon />
		</Icon>
	);
}
