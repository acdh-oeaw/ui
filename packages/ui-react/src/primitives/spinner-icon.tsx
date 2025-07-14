"use client";

import { cn } from "@acdh-oeaw/style-variants";
import { Loader2Icon } from "lucide-react";
import type { ReactNode } from "react";

import { Icon, type IconProps } from "@/src/primitives/icon";

export interface SpinnerIconProps extends Omit<IconProps, "children"> {}

export function SpinnerIcon(props: Readonly<SpinnerIconProps>): ReactNode {
	const { className, ...rest } = props;

	return (
		<Icon {...rest} className={cn(["animate-spin"], className)}>
			<Loader2Icon />
		</Icon>
	);
}
