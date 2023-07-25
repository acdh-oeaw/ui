import type { ComponentPropsWithRef, ReactNode } from "react";

import { ComboBoxInputGroup } from "@/components/primitives/combobox";
import { ComboBoxField } from "@/components/primitives/combobox-field";
import { FieldDescription } from "@/components/primitives/field-description";
import { FieldError } from "@/components/primitives/field-error";
import { Label } from "@/components/primitives/label";
import { ListBox, ListBoxItem } from "@/components/primitives/listbox";
import { Popover } from "@/components/primitives/popover";

interface ComboBoxFormFieldProps<T extends object>
	extends Omit<ComponentPropsWithRef<typeof ComboBoxField>, "children"> {
	children: ComponentPropsWithRef<typeof ListBox<T>>["children"];
	description?: ReactNode;
	error?: ReactNode;
	items: ComponentPropsWithRef<typeof ListBox<T>>["items"];
	label: ReactNode;
}

export function ComboBoxFormField<T extends object>(
	props: Readonly<ComboBoxFormFieldProps<T>>,
): ReactNode {
	const { children, description, error, items, label, ...rest } = props;

	return (
		<ComboBoxField {...rest}>
			<Label>{label}</Label>
			<FieldError>{error}</FieldError>
			<ComboBoxInputGroup />
			<FieldDescription>{description}</FieldDescription>
			<Popover>
				<ListBox items={items}>{children}</ListBox>
			</Popover>
		</ComboBoxField>
	);
}

export { ListBoxItem as ComboBoxFormFieldItem };
