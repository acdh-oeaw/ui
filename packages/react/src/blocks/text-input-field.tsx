import { Fragment, type ReactNode } from "react";

import type { FieldProps } from "@/blocks/field";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { RequiredIndicator } from "@/components/required-indicator";
import { TextField, type TextFieldProps } from "@/components/text-field";
import { TextInput } from "@/components/text-input";

interface TextInputFieldProps extends Omit<TextFieldProps, "children">, FieldProps {
	placeholder?: string;
}

export function TextInputField(props: TextInputFieldProps): ReactNode {
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
						<TextInput placeholder={placeholder} />
						{description != null ? <FieldDescription>{description}</FieldDescription> : null}
						<FieldError>{errorMessage}</FieldError>
					</Fragment>
				);
			}}
		</TextField>
	);
}
