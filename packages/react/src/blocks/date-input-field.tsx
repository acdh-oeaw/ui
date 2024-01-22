import { Fragment, type ReactNode } from "react";
import { DateSegment } from "react-aria-components";

import type { FieldProps } from "@/blocks/field";
import { DateField, type DateFieldProps, type DateValue } from "@/components/date-field";
import { DateInput } from "@/components/date-input";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { RequiredIndicator } from "@/components/required-indicator";

interface DateInputFieldProps<T extends DateValue>
	extends Omit<DateFieldProps<T>, "children">,
		FieldProps {}

export function DateInputField<T extends DateValue>(props: DateInputFieldProps<T>): ReactNode {
	const { description, errorMessage, label, ...rest } = props;

	return (
		<DateField {...rest}>
			{({ isRequired }) => {
				return (
					<Fragment>
						{label != null ? (
							<Label>
								{label}
								{isRequired ? <RequiredIndicator /> : null}
							</Label>
						) : null}
						<DateInput>
							{(segment) => {
								return <DateSegment segment={segment} />;
							}}
						</DateInput>
						{description != null ? <FieldDescription>{description}</FieldDescription> : null}
						<FieldError>{errorMessage}</FieldError>
					</Fragment>
				);
			}}
		</DateField>
	);
}
