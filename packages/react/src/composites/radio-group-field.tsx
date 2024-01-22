import type { ElementRef } from "react";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { Radio, RadioGroup, type RadioGroupProps } from "@/components/radio-group";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import type { FieldProps } from "@/types/field";

export interface RadioGroupFieldProps extends RadioGroupProps, FieldProps {}

export const RadioGroupField = forwardRef(function RadioGroupField(
	props: RadioGroupFieldProps,
	forwardedRef: ForwardedRef<ElementRef<typeof RadioGroup>>,
) {
	const { children, description, errorMessage, label, ...rest } = props;

	return (
		<RadioGroup ref={forwardedRef} {...rest}>
			{label != null ? <Label>{label}</Label> : null}
			{children}
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
		</RadioGroup>
	);
});

export { Radio as RadioItem };
