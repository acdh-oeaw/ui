import { Fragment, type ReactNode } from "react";

import type { FieldProps } from "@/blocks/field";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { NumberField, type NumberFieldProps } from "@/components/number-field";
import { NumberInput } from "@/components/number-input";
import { RequiredIndicator } from "@/components/required-indicator";

interface NumberInputFieldProps extends Omit<NumberFieldProps, "children">, FieldProps {
	placeholder?: string;
}

export function NumberInputField(props: NumberInputFieldProps): ReactNode {
	const { description, errorMessage, label, placeholder, ...rest } = props;

	return (
		<NumberField {...rest}>
			{({ isRequired }) => {
				return (
					<Fragment>
						{label != null ? (
							<Label>
								{label}
								{isRequired ? <RequiredIndicator /> : null}
							</Label>
						) : null}
						<NumberInput placeholder={placeholder} />
						{description != null ? <FieldDescription>{description}</FieldDescription> : null}
						<FieldError>{errorMessage}</FieldError>
					</Fragment>
				);
			}}
		</NumberField>
	);
}
