import { Fragment, type ReactNode } from "react";

import type { FieldProps } from "@/blocks/field";
import { CheckBox, type CheckBoxProps } from "@/components/check-box";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { RequiredIndicator } from "@/components/required-indicator";

interface CheckBoxFieldProps extends Omit<CheckBoxProps, "children">, FieldProps {}

export function CheckBoxField(props: CheckBoxFieldProps): ReactNode {
	const { description, errorMessage, label, ...rest } = props;

	return (
		<CheckBox {...rest}>
			{({ isRequired }) => {
				return (
					<Fragment>
						{label != null ? (
							<Label>
								{label}
								{isRequired ? <RequiredIndicator /> : null}
							</Label>
						) : null}
						{description != null ? <FieldDescription>{description}</FieldDescription> : null}
						<FieldError>{errorMessage}</FieldError>
					</Fragment>
				);
			}}
		</CheckBox>
	);
}
