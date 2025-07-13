"use client";

import { cn } from "@acdh-oeaw/style-variants";
import { AsteriskIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Icon, type IconProps } from "@/src/primitives/icon";

export interface FieldRequiredIndicatorProps extends Omit<IconProps, "children" | "size"> {}

export function FieldRequiredIndicator(props: Readonly<FieldRequiredIndicatorProps>): ReactNode {
	const { className, ...rest } = props;

	return (
		<Icon {...rest} className={cn(["scale-75"], className)} size="line">
			<AsteriskIcon />
		</Icon>
	);
}
