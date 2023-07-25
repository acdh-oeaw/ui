import { cn } from "@acdh-oeaw/style-variants";
import { AsteriskIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Icon, type IconProps } from "@/src/primitives/icon";

export interface RequiredIconProps extends Omit<IconProps, "children"> {}

export function RequiredIcon(props: Readonly<RequiredIconProps>): ReactNode {
	const { className, ...rest } = props;

	return (
		<Icon {...rest} className={cn(["text-icon-neutral", className])}>
			<AsteriskIcon />
		</Icon>
	);
}
