import type { ReactNode } from "react";
import type { ValidationResult as AriaValidationResult } from "react-aria-components";

import { DropdownItem } from "@/src/components/dropdown-item";
import { FieldLabel } from "@/src/components/field-label";
import { TriggerIcon } from "@/src/components/trigger-icon";
import { ComboBoxField, type ComboBoxFieldProps } from "@/src/primitives/combo-box-field";
import { ComboBoxInput } from "@/src/primitives/combo-box-input";
import { ComboBoxInputGroup } from "@/src/primitives/combo-box-input-group";
import { ComboBoxTrigger } from "@/src/primitives/combo-box-trigger";
import { FieldDescription } from "@/src/primitives/field-description";
import { FieldError } from "@/src/primitives/field-error";
import { ListBox, type ListBoxProps } from "@/src/primitives/list-box";
import { Popover } from "@/src/primitives/popover";

export interface ComboBoxFormFieldProps<T extends object>
	extends Omit<ComboBoxFieldProps<T>, "children">,
		Pick<ListBoxProps<T>, "children" | "items"> {
	description?: ReactNode;
	errorMessage?: ReactNode | ((validation: AriaValidationResult) => ReactNode);
	label?: ReactNode;
}

export function ComboBoxFormField<T extends object>(
	props: Readonly<ComboBoxFormFieldProps<T>>,
): ReactNode {
	const { children, description, errorMessage, items, label, ...rest } = props;

	return (
		<ComboBoxField {...rest}>
			<FieldLabel>{label}</FieldLabel>
			<ComboBoxInputGroup>
				<ComboBoxInput />
				<ComboBoxTrigger>
					<TriggerIcon size="sm" />
				</ComboBoxTrigger>
			</ComboBoxInputGroup>
			<FieldDescription>(description)</FieldDescription>
			<FieldError>{errorMessage}</FieldError>
			<Popover>
				<ListBox items={items}>{children}</ListBox>
			</Popover>
		</ComboBoxField>
	);
}

export { DropdownItem as ComboBoxFormFieldItem };
