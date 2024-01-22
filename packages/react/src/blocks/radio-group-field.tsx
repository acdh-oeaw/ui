import { Fragment, type ReactNode } from "react";

import type { FieldProps } from "@/blocks/field";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { Radio, RadioGroup, type RadioGroupProps } from "@/components/radio-group";
import { RequiredIndicator } from "@/components/required-indicator";

interface RadioGroupFieldProps extends Omit<RadioGroupProps, "children">, FieldProps {
	children: ReactNode;
}

export function RadioGroupField(props: RadioGroupFieldProps): ReactNode {
	const { children, description, errorMessage, label, ...rest } = props;

	return (
		<RadioGroup {...rest}>
			{({ isRequired }) => {
				return (
					<Fragment>
						{label != null ? (
							<Label>
								{label}
								{isRequired ? <RequiredIndicator /> : null}
							</Label>
						) : null}
						{children}
						{description != null ? <FieldDescription>{description}</FieldDescription> : null}
						<FieldError>{errorMessage}</FieldError>
					</Fragment>
				);
			}}
		</RadioGroup>
	);
}

export { Radio };
