"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	FieldError as AriaFieldError,
	type FieldErrorProps as AriaFieldErrorProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const fielderrorStyles = styles({
	base: ["text-text-negative"],
	variants: {
		size: {
			sm: ["text-sm/5"],
			md: ["text-sm/5"],
			lg: ["text-base/6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type FieldErrorStylesProps = GetVariantProps<typeof fielderrorStyles>;

export interface FieldErrorProps extends AriaFieldErrorProps, FieldErrorStylesProps {}

export function FieldError(props: Readonly<FieldErrorProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaFieldError
			{...rest}
			className={composeRenderProps(className, (className) => {
				return fielderrorStyles({ className, size });
			})}
		>
			{children}
		</AriaFieldError>
	);
}
