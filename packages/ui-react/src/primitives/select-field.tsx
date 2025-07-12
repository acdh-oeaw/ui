"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import { type ReactNode, useMemo } from "react";
import {
	composeRenderProps,
	Select as AriaSelect,
	type SelectProps as AriaSelectProps,
} from "react-aria-components";

import { FieldContext } from "@/src/primitives/field-context";
import { StylesContext, useStylesContext } from "@/src/primitives/styles-context";

export const selectFieldStyles = styles({
	base: ["flex flex-col gap-y-1"],
	variants: {
		size: {
			sm: [],
			md: [],
			lg: [],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type SelectFieldStylesProps = GetVariantProps<typeof selectFieldStyles>;

export interface SelectFieldProps<T extends object>
	extends AriaSelectProps<T>,
		SelectFieldStylesProps {}

export function SelectField<T extends object>(props: Readonly<SelectFieldProps<T>>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	const stylesProps = useMemo(() => {
		return { size };
	}, [size]);

	return (
		<AriaSelect
			{...rest}
			className={composeRenderProps(className, (className) => {
				return selectFieldStyles({ className, size });
			})}
		>
			{composeRenderProps(children, (children, renderProps) => {
				return (
					<StylesContext value={stylesProps}>
						<FieldContext value={renderProps}>{children}</FieldContext>
					</StylesContext>
				);
			})}
		</AriaSelect>
	);
}
