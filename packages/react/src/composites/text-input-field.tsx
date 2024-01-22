import type { ElementRef } from "react";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { TextField, type TextFieldProps } from "@/components/text-field";
import { TextInput } from "@/components/text-input";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import type { FieldProps } from "@/types/field";

export interface TextInputFieldProps extends Omit<TextFieldProps, "children">, FieldProps {}

export const TextInputField = forwardRef(function TextInputField(
	props: TextInputFieldProps,
	forwardedRef: ForwardedRef<ElementRef<typeof TextField>>,
) {
	const { description, errorMessage, label, ...rest } = props;

	return (
		<TextField ref={forwardedRef} {...rest}>
			{label != null ? <Label>{label}</Label> : null}
			<TextInput />
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
		</TextField>
	);
});
