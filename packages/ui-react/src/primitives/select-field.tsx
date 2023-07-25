"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	Provider,
	Select as AriaSelect,
	type SelectProps as AriaSelectProps,
} from "react-aria-components";

import { FieldContext } from "@/src/primitives/field-context";

export interface SelectFieldProps<T extends object> extends AriaSelectProps<T> {}

export function SelectField<T extends object>(props: Readonly<SelectFieldProps<T>>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaSelect
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn(["flex flex-col gap-y-1"], className);
			})}
		>
			{composeRenderProps(children, (children, renderProps) => {
				return <Provider values={[[FieldContext, renderProps]]}>{children}</Provider>;
			})}
		</AriaSelect>
	);
}
