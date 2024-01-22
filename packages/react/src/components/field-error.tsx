"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	FieldError as AriaFieldError,
	type FieldErrorProps as AriaFieldErrorProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const fieldErrorStyles = variants({
	// FIXME: contrast in dark mode
	base: "text-xs font-medium text-negative forced-colors:text-[Mark]",
});

export type FieldErrorStyles = VariantProps<typeof fieldErrorStyles>;

export interface FieldErrorProps extends AriaFieldErrorProps, FieldErrorStyles {}

export const FieldError = forwardRef(function FieldError(
	props: FieldErrorProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaFieldError>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaFieldError
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return fieldErrorStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaFieldError>
	);
});
