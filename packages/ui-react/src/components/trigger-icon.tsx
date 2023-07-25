import { cn } from "@acdh-oeaw/style-variants";
import { ChevronDownIcon } from "lucide-react";
import { type ReactNode, use } from "react";
import { OverlayTriggerStateContext } from "react-aria-components";

import { Icon, type IconProps } from "@/src/primitives/icon";

export interface TriggerIconProps extends Omit<IconProps, "children"> {}

export function TriggerIcon(props: Readonly<TriggerIconProps>): ReactNode {
	const { className, ...rest } = props;

	const state = use(OverlayTriggerStateContext);

	return (
		<Icon
			{...rest}
			className={cn(["mx-4 my-auto h-full text-icon-neutral open:rotate-180", className])}
			data-open={state?.isOpen === true || undefined}
		>
			<ChevronDownIcon />
		</Icon>
	);
}
