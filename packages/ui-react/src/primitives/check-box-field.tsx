"use client";

import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Checkbox as AriaCheckbox,
	type CheckboxProps as AriaCheckboxProps,
	composeRenderProps,
	Provider,
} from "react-aria-components";

import { CheckBoxStateContext } from "@/src/primitives/check-box-state-context";

export interface CheckBoxFieldProps extends AriaCheckboxProps {}

export function CheckBoxField(props: Readonly<CheckBoxFieldProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaCheckbox
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn(["inline-flex items-center gap-x-1.5 text-text-strong"], className);
			})}
		>
			{composeRenderProps(children, (children, renderProps) => {
				return <Provider values={[[CheckBoxStateContext, renderProps]]}>{children}</Provider>;
			})}
		</AriaCheckbox>
	);
}
