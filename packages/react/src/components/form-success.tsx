"use client";

import { CheckIcon } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const formSuccessStyles = variants({
	base: [
		"flex items-center gap-1.5 transition",
		"text-positive-600 dark:text-positive-500 text-xs leading-normal",
		"disabled:opacity-50",
	],
	variants: {
		isEmpty: {
			true: "sr-only",
		},
	},
});

export type FormSuccessStyles = VariantProps<typeof formSuccessStyles>;

export interface FormSuccessProps
	extends Omit<ComponentPropsWithoutRef<"div">, "aria-atomic" | "aria-live" | "aria-relevant">,
		FormSuccessStyles {}

export const FormSuccess = forwardRef(function FormSuccess(
	props: FormSuccessProps,
	forwardedRef: ForwardedRef<ElementRef<"div">>,
) {
	const { children, className, ...rest } = props;

	const isEmpty = children == null;

	return (
		<div
			ref={forwardedRef}
			{...rest}
			aria-atomic={true}
			aria-live="polite"
			aria-relevant="text"
			className={formSuccessStyles({ className, isEmpty })}
		>
			{!isEmpty ? <CheckIcon aria-hidden={true} className="size-4 shrink-0" /> : null}
			{children}
		</div>
	);
});
