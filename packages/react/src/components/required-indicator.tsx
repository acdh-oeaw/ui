import { AsteriskIcon, type LucideIcon, type LucideProps } from "lucide-react";
import type { ElementRef } from "react";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const requiredIndicatorStyles = variants({
	base: ["px-0.5 text-lg leading-none"],
});

export type RequiredIndicatorStyles = VariantProps<typeof requiredIndicatorStyles>;

export interface RequiredIndicatorProps extends LucideProps, RequiredIndicatorStyles {}

export const RequiredIndicator = forwardRef(function RequiredIndicator(
	props: RequiredIndicatorProps,
	forwardedRef: ForwardedRef<ElementRef<LucideIcon>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AsteriskIcon ref={forwardedRef} {...rest} className={requiredIndicatorStyles({ className })}>
			{children}
		</AsteriskIcon>
	);
});
