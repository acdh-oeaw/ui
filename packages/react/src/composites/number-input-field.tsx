import type { ElementRef } from "react";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { NumberField, type NumberFieldProps } from "@/components/number-field";
import { NumberInput } from "@/components/number-input";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import type { FieldProps } from "@/types/field";

export interface NumberInputFieldProps extends Omit<NumberFieldProps, "children">, FieldProps {}

export const NumberInputField = forwardRef(function NumberInputField(
	props: NumberInputFieldProps,
	forwardedRef: ForwardedRef<ElementRef<typeof NumberField>>,
) {
	const { description, errorMessage, label, ...rest } = props;

	return (
		<NumberField ref={forwardedRef} {...rest}>
			{label != null ? <Label>{label}</Label> : null}
			<NumberInput />
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
		</NumberField>
	);
});
