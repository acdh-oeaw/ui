import type { ElementRef } from "react";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { TextArea } from "@/components/text-area";
import { TextField, type TextFieldProps } from "@/components/text-field";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import type { FieldProps } from "@/types/field";

export interface TextAreaFieldProps extends Omit<TextFieldProps, "children">, FieldProps {}

export const TextAreaField = forwardRef(function TextAreaField(
	props: TextAreaFieldProps,
	forwardedRef: ForwardedRef<ElementRef<typeof TextField>>,
) {
	const { description, errorMessage, label, ...rest } = props;

	return (
		<TextField ref={forwardedRef} {...rest}>
			{label != null ? <Label>{label}</Label> : null}
			<TextArea />
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
		</TextField>
	);
});
