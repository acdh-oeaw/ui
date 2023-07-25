import type { ReactNode } from "react";
import type { ValidationResult as AriaValidationResult } from "react-aria-components";

import { DropdownItem } from "@/src/components/dropdown-item";
import { FieldLabel } from "@/src/components/field-label";
import { TriggerIcon } from "@/src/components/trigger-icon";
import { FieldDescription } from "@/src/primitives/field-description";
import { FieldError } from "@/src/primitives/field-error";
import { ListBox, type ListBoxProps } from "@/src/primitives/list-box";
import { Popover } from "@/src/primitives/popover";
import { SelectField, type SelectFieldProps } from "@/src/primitives/select-field";
import { SelectTrigger } from "@/src/primitives/select-trigger";
import { SelectValue } from "@/src/primitives/select-value";

export interface SelectFormFieldProps<T extends object>
	extends Omit<SelectFieldProps<T>, "children">,
		Pick<ListBoxProps<T>, "children" | "items"> {
	description?: ReactNode;
	errorMessage?: ReactNode | ((validation: AriaValidationResult) => ReactNode);
	label?: ReactNode;
}

export function SelectFormField<T extends object>(
	props: Readonly<SelectFormFieldProps<T>>,
): ReactNode {
	const { children, description, errorMessage, items, label, ...rest } = props;

	return (
		<SelectField {...rest}>
			<FieldLabel>{label}</FieldLabel>
			<SelectTrigger>
				<SelectValue />
				<TriggerIcon size="sm" />
			</SelectTrigger>
			<FieldDescription>(description)</FieldDescription>
			<FieldError>{errorMessage}</FieldError>
			<Popover>
				<ListBox items={items}>{children}</ListBox>
			</Popover>
		</SelectField>
	);
}

export { DropdownItem as SelectFormFieldItem };
