import type { ElementRef } from "react";
import {
	composeRenderProps,
	Group as AriaFieldGroup,
	type GroupProps as AriaFieldGroupProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

/** @internal */
export const _fieldBorderStyles = {
	variants: {
		isFocusWithin: {
			false: "border-neutral-300 forced-colors:border-[ButtonBorder]",
			true: "border-neutral-600 forced-colors:border-[Highlight]",
		},
		isInvalid: {
			true: "border-red-600 forced-colors:border-[Mark]",
		},
		isDisabled: {
			true: "border-neutral-200 forced-colors:border-[GrayText]",
		},
	},
};

export const fieldGroupStyles = compose(
	focusRing,
	variants({
		base: "group flex h-9 items-center overflow-hidden rounded-lg border-2 bg-white forced-colors:bg-[Field]",
		variants: _fieldBorderStyles.variants,
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
