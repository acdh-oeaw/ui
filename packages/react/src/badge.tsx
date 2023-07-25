import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";

import { cn } from "@/lib/cn";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";

const styles = cva(
	"inline-flex shrink-0 select-none items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors",
	{
		variants: {
			variant: {
				primary: "border-transparent bg-primary text-on-primary",
				secondary: "border-transparent bg-secondary text-on-secondary",
				negative: "border-transparent bg-negative text-on-negative",
				positive: "border-transparent bg-positive text-on-positive",
				outline: "text-on-background",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	},
);

type BadgeStyleProps = VariantProps<typeof styles>;

export interface BadgeProps {
	children: ReactNode;
	className?: string;
	/** @default 'primary'' */
	variant?: BadgeStyleProps["variant"];
}

function Badge(props: BadgeProps, forwardedRef: ForwardedRef<HTMLSpanElement>): ReactNode {
	const { children, className, variant, ...rest } = props;

	return (
		<span ref={forwardedRef} {...rest} className={cn(styles({ className, variant }))}>
			{children}
		</span>
	);
}

const _Badge = forwardRef(Badge);
export { _Badge as Badge };
