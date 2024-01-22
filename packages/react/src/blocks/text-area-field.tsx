import { Fragment, type ReactNode } from "react";

import type { FieldProps } from "@/blocks/field";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { RequiredIndicator } from "@/components/required-indicator";
import { TextArea } from "@/components/text-area";
import { TextField, type TextFieldProps } from "@/components/text-field";

interface TextAreaFieldProps extends Omit<TextFieldProps, "children">, FieldProps {
	placeholder?: string;
}

export function TextAreaField(props: TextAreaFieldProps): ReactNode {
	const { description, errorMessage, label, placeholder, ...rest } = props;

	return (
		<TextField {...rest}>
			{({ isRequired }) => {
				return (
					<Fragment>
						{label != null ? (
							<Label>
								{label}
								{isRequired ? <RequiredIndicator /> : null}
							</Label>
						) : null}
						<TextArea placeholder={placeholder} />
						{description != null ? <FieldDescription>{description}</FieldDescription> : null}
						<FieldError>{errorMessage}</FieldError>
					</Fragment>
				);
			}}
		</TextField>
	);
}
