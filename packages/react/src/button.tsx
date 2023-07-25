import { cva, type VariantProps } from "class-variance-authority";
import { type ElementRef, type ReactNode } from "react";
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components";

import { cn } from "@/lib/cn";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";

const styles = cva(
	"inline-flex shrink-0 items-center justify-center rounded-md text-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-focus-ring data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-background",
	{
		variants: {
			variant: {
				primary:
					"bg-primary text-on-primary data-[hovered]:bg-primary/90 data-[pressed]:bg-primary/90",
				secondary:
					"bg-secondary text-on-secondary data-[hovered]:bg-secondary/80 data-[pressed]:bg-secondary/80",
				negative:
					"bg-negative text-on-negative data-[hovered]:bg-negative/90 data-[pressed]:bg-negative/90",
				positive:
					"bg-positive text-on-positive data-[hovered]:bg-positive/90 data-[pressed]:bg-positive/90",
				outline:
					"border border-input bg-background data-[hovered]:bg-accent data-[pressed]:bg-accent data-[hovered]:text-on-accent data-[pressed]:text-on-accent",
				ghost:
					"data-[hovered]:bg-accent data-[pressed]:bg-accent data-[hovered]:text-on-accent data-[pressed]:text-on-accent",
				link: "text-primary underline-offset-4 data-[hovered]:underline data-[pressed]:underline",
			},
			size: {
				sm: "h-9 px-3",
				md: "h-10 px-4",
				lg: "h-11 px-8",
				icon: "s-10",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

type ButtonStyleProps = VariantProps<typeof styles>;

export interface ButtonProps extends AriaButtonProps {
	children: ReactNode;
	className?: string;
	/** @default 'md'' */
	size?: ButtonStyleProps["size"];
	/** @default 'primary'' */
	variant?: ButtonStyleProps["variant"];
}

function Button(
	props: ButtonProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaButton>>,
): ReactNode {
	const { children, className, size, variant, ...rest } = props;

	return (
		<AriaButton ref={forwardedRef} {...rest} className={cn(styles({ className, size, variant }))}>
			{children}
		</AriaButton>
	);
}

const _Button = forwardRef(Button);
export { _Button as Button };
