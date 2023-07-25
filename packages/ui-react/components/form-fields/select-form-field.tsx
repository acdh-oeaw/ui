import type { ComponentPropsWithRef, ReactNode } from "react";

import { FieldDescription } from "@/components/primitives/field-description";
import { FieldError } from "@/components/primitives/field-error";
import { Label } from "@/components/primitives/label";
import { ListBox, ListBoxItem } from "@/components/primitives/listbox";
import { Popover } from "@/components/primitives/popover";
import { SelectButton } from "@/components/primitives/select";
import { SelectField } from "@/components/primitives/select-field";

interface SelectFormFieldProps<T extends object>
	extends Omit<ComponentPropsWithRef<typeof SelectField>, "children"> {
	children: ComponentPropsWithRef<typeof ListBox<T>>["children"];
	description?: ReactNode;
	error?: ReactNode;
	items: ComponentPropsWithRef<typeof ListBox<T>>["items"];
	label: ReactNode;
}

export function SelectFormField<T extends object>(
	props: Readonly<SelectFormFieldProps<T>>,
): ReactNode {
	const { children, description, error, items, label, ...rest } = props;

	return (
		<SelectField {...rest}>
			<Label>{label}</Label>
			<FieldError>{error}</FieldError>
			<SelectButton />
			<FieldDescription>{description}</FieldDescription>
			<Popover>
				<ListBox items={items}>{children}</ListBox>
			</Popover>
		</SelectField>
	);
}

export { ListBoxItem as SelectFormFieldItem };
