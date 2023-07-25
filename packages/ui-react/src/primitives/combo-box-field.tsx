"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	ComboBox as AriaComboBox,
	type ComboBoxProps as AriaComboBoxProps,
	composeRenderProps,
	Provider,
} from "react-aria-components";

import { FieldContext } from "@/src/primitives/field-context";

export interface ComboBoxFieldProps<T extends object> extends AriaComboBoxProps<T> {}

export function ComboBoxField<T extends object>(props: Readonly<ComboBoxFieldProps<T>>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaComboBox
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn(["flex flex-col gap-y-1"], className);
			})}
		>
			{composeRenderProps(children, (children, renderProps) => {
				return <Provider values={[[FieldContext, renderProps]]}>{children}</Provider>;
			})}
		</AriaComboBox>
	);
}
