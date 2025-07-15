"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import { type ReactNode, useMemo } from "react";
import { Form as AriaForm, type FormProps as AriaFormProps } from "react-aria-components";

import { StylesContext } from "@/src/primitives/styles-context";

export const formStyles = styles({
	base: ["flex flex-col"],
	variants: {
		size: {
			sm: ["gap-y-4"],
			md: ["gap-y-6"],
			lg: ["gap-y-8"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type FormStylesProps = GetVariantProps<typeof formStyles>;

export interface FormProps extends AriaFormProps, FormStylesProps {}

export function Form(props: Readonly<FormProps>): ReactNode {
	const { children, className, size, ...rest } = props;

	const styleProps = useMemo(() => {
		return { size };
	}, [size]);

	return (
		<AriaForm {...rest} className={formStyles({ className, size })}>
			<StylesContext value={styleProps}>{children}</StylesContext>
		</AriaForm>
	);
}
