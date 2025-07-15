"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import { type ReactNode, useMemo } from "react";
import {
	Checkbox as AriaCheckBox,
	type CheckboxProps as AriaCheckBoxProps,
	composeRenderProps,
} from "react-aria-components";

import { FieldContext } from "@/src/primitives/field-context";
import { StylesContext, useStylesContext } from "@/src/primitives/styles-context";

export const checkBoxFieldStyles = styles({
	base: ["inline-flex text-text-strong"],
	variants: {
		size: {
			sm: ["gap-x-1.5 text-sm/5"],
			md: ["gap-x-2 text-base/6"],
			lg: ["gap-x-2 text-base/6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type CheckBoxFieldStylesProps = GetVariantProps<typeof checkBoxFieldStyles>;

export interface CheckBoxPropsField extends AriaCheckBoxProps, CheckBoxFieldStylesProps {}

export function CheckBoxField(props: Readonly<CheckBoxPropsField>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	const stylesProps = useMemo(() => {
		return { size };
	}, [size]);

	return (
		<AriaCheckBox
			{...rest}
			className={composeRenderProps(className, (className) => {
				return checkBoxFieldStyles({ className, size });
			})}
		>
			{composeRenderProps(children, (children, renderProps) => {
				return (
					<StylesContext value={stylesProps}>
						<FieldContext value={renderProps}>{children}</FieldContext>
					</StylesContext>
				);
			})}
		</AriaCheckBox>
	);
}
