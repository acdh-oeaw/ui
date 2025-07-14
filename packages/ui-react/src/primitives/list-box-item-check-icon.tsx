"use client";

import { CheckIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Icon, type IconProps } from "@/src/primitives/icon";

export interface ListBoxItemCheckIconProps extends Omit<IconProps, "children" | "size"> {}

export function ListBoxItemCheckIcon(props: Readonly<ListBoxItemCheckIconProps>): ReactNode {
	const { ...rest } = props;

	return (
		<Icon {...rest} size="line">
			<CheckIcon />
		</Icon>
	);
}
