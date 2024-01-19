import type { ElementRef } from "react";
import {
	TextField as AriaTextField,
	composeRenderProps,
	type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants, compose } from "@/lib/styles";
import type { FieldProps } from "@/types/field";
import { focusRing } from "@/styles/focus-ring";
import { Label } from "@/components/label";
import { FieldError } from "@/components/field-error";
import { FieldDescription } from "@/components/field-description";
import { Input } from "@/components/input";
import { _fieldBorderStyles } from "@/components/field-group";

export const textFieldStyles = variants({
	base: "flex flex-col gap-1",
});

export type TextFieldStyles = VariantProps<typeof textFieldStyles>;

const textFieldInputStyles = compose(
	focusRing,
	variants({
		base: "border-2 rounded-md",
		variants: {
			isFocused: _fieldBorderStyles.variants.isFocusWithin,
			..._fieldBorderStyles.variants,
		},
	}),
);

export interface TextFieldProps
	extends Omit<AriaTextFieldProps, "children">,
		FieldProps,
		TextFieldStyles {}

export const TextField = forwardRef(function TextField(
	props: TextFieldProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTextField>>,
) {
	const { className, description, errorMessage, label, ...rest } = props;

	return (
		<AriaTextField
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return textFieldStyles({ ...renderProps, className });
			})}
		>
			{label != null ? <Label>{label}</Label> : null}
			<Input
				className={composeRenderProps(className, (className, renderProps) => {
					return textFieldInputStyles({ ...renderProps, className: undefined });
				})}
			/>
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
		</AriaTextField>
	);
});
