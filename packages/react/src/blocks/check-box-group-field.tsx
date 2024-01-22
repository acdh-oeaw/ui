import { Fragment, type ReactNode } from "react";

import type { FieldProps } from "@/blocks/field";
import { CheckBox, CheckBoxGroup, type CheckBoxGroupProps } from "@/components/check-box";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { RequiredIndicator } from "@/components/required-indicator";

interface CheckBoxGroupFieldProps extends Omit<CheckBoxGroupProps, "children">, FieldProps {
	children: ReactNode;
}

export function CheckBoxGroupField(props: CheckBoxGroupFieldProps): ReactNode {
	const { children, description, errorMessage, label, ...rest } = props;

	return (
		<CheckBoxGroup {...rest}>
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
		</CheckBoxGroup>
	);
}

export { CheckBox };
