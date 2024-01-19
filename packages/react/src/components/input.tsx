import type { ElementRef } from "react";
import {
	composeRenderProps,
	Input as AriaInput,
	type InputProps as AriaInputProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const inputStyles = variants({
	base: "min-w-0 flex-1 bg-white px-2 py-1.5 text-sm text-neutral-800 outline outline-0 disabled:text-neutral-200",
});

export type InputStyles = VariantProps<typeof inputStyles>;

export interface InputProps extends AriaInputProps, InputStyles {}

export const Input = forwardRef(function Input(
	props: InputProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaInput>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaInput
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return inputStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaInput>
	);
});
