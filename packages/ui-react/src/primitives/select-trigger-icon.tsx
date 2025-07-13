"use client";

import { cn } from "@acdh-oeaw/style-variants";
import { ChevronDownIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Icon, type IconProps } from "@/src/primitives/icon";
import { useStylesContext } from "@/src/primitives/styles-context";

export interface SelectTriggerIconProps extends Omit<IconProps, "children" | "size"> {}

export function SelectTriggerIcon(props: Readonly<SelectTriggerIconProps>): ReactNode {
	const { className, ...rest } = useStylesContext(props);

	return (
		<Icon {...rest} className={cn(["p-0.75"], className)} size="line">
			<ChevronDownIcon />
		</Icon>
	);
}
