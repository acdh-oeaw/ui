import { cn } from "@acdh-oeaw/style-variants";
import { AsteriskIcon } from "lucide-react";
import type { ComponentPropsWithRef, ReactNode } from "react";

interface RequiredIndicatorProps extends ComponentPropsWithRef<typeof AsteriskIcon> {}

export function RequiredIndicator(props: Readonly<RequiredIndicatorProps>): ReactNode {
	const { className, ...rest } = props;

	return (
		<AsteriskIcon
			{...rest}
			className={cn("mt-px size-[0.75em] self-start", className)}
			data-slot="icon"
		/>
	);
}
