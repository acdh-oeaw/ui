"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	FieldError as AriaFieldError,
	type FieldErrorProps as AriaFieldErrorProps,
} from "react-aria-components";

export interface FieldErrorProps extends AriaFieldErrorProps {}

export function FieldError(props: Readonly<FieldErrorProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaFieldError
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn(["text-sm text-text-negative"], className);
			})}
		>
			{children}
		</AriaFieldError>
	);
}
