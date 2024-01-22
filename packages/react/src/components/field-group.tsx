"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	Group as AriaFieldGroup,
	type GroupProps as AriaFieldGroupProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const fieldGroupStyles = compose(
	focusRing,
	variants({
		base: "group flex h-9 items-center overflow-hidden rounded-md border-2 bg-transparent shadow-sm forced-colors:bg-[Field]",
		variants: {
			isFocusWithin: {
				false: "border-input forced-colors:border-[ButtonBorder]",
				true: "border-foreground forced-colors:border-[Highlight]",
			},
			isInvalid: {
				true: "border-negative forced-colors:border-[Mark]",
			},
			isDisabled: {
				true: "forced-colors:border-[GrayText]",
			},
		},
	}),
);

export type FieldGroupStyles = VariantProps<typeof fieldGroupStyles>;

export interface FieldGroupProps extends AriaFieldGroupProps, FieldGroupStyles {}

export const FieldGroup = forwardRef(function FieldGroup(
	props: FieldGroupProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaFieldGroup>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaFieldGroup
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return fieldGroupStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaFieldGroup>
	);
});
