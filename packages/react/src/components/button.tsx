import type { ElementRef } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const buttonStyles = compose(
	focusRing,
	variants({
		base: "cursor-default rounded-lg border border-black/10 px-5 py-2 text-center text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition",
		variants: {
			variant: {
				primary: "bg-blue-600 text-white hover:bg-blue-700 pressed:bg-blue-800",
				secondary: "bg-neutral-100 text-neutral-800 hover:bg-neutral-200 pressed:bg-neutral-300",
				destructive: "bg-red-700 text-white hover:bg-red-800 pressed:bg-red-900",
				icon: "flex items-center justify-center border-0 p-1 text-neutral-600 hover:bg-black/[5%] pressed:bg-black/10 disabled:bg-transparent",
			},
			isDisabled: {
				true: "border-black/5 bg-neutral-100 text-neutral-300 forced-colors:text-[GrayText]",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	}),
);

export type ButtonStyles = VariantProps<typeof buttonStyles>;

export interface ButtonProps extends AriaButtonProps, ButtonStyles {}

export const Button = forwardRef(function Button(
	props: ButtonProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaButton>>,
) {
	const { children, className, variant, ...rest } = props;

	return (
		<AriaButton
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return buttonStyles({ ...renderProps, className, variant });
			})}
		>
			{children}
		</AriaButton>
	);
});
