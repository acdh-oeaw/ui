import type { ComponentPropsWithRef, ReactNode } from "react";

import { FieldDescription } from "@/components/primitives/field-description";
import { FieldError } from "@/components/primitives/field-error";
import { Label } from "@/components/primitives/label";
import { TextArea } from "@/components/primitives/text-area";
import { TextAreaField } from "@/components/primitives/text-area-field";

interface TextAreaFormFieldProps extends ComponentPropsWithRef<typeof TextAreaField> {
	description?: ReactNode;
	error?: ReactNode;
	label: ReactNode;
	placeholder?: string;
}

export function TextAreaFormField(props: Readonly<TextAreaFormFieldProps>): ReactNode {
	const { description, error, label, placeholder, ...rest } = props;

	return (
		<TextAreaField {...rest}>
			<Label>{label}</Label>
			<FieldError>{error}</FieldError>
			<TextArea placeholder={placeholder} />
			<FieldDescription>{description}</FieldDescription>
		</TextAreaField>
	);
}
