import { Fragment, type ReactNode } from "react";

import type { FieldProps } from "@/blocks/field";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { RequiredIndicator } from "@/components/required-indicator";
import {
	Select,
	SelectListBox,
	SelectListBoxItem,
	SelectPopover,
	type SelectPopoverProps,
	type SelectProps,
	SelectTrigger,
	SelectValue,
} from "@/components/select";

interface SelectFieldProps<T extends object> extends Omit<SelectProps<T>, "children">, FieldProps {
	children: ReactNode;
	placement?: SelectPopoverProps["placement"];
}

export function SelectField<T extends object>(props: SelectFieldProps<T>): ReactNode {
	const { children, description, errorMessage, label, placement, ...rest } = props;

	return (
		<Select<T> {...rest}>
			{({ isRequired }) => {
				return (
					<Fragment>
						{label != null ? (
							<Label>
								{label}
								{isRequired ? <RequiredIndicator /> : null}
							</Label>
						) : null}
						<SelectTrigger>
							<SelectValue />
						</SelectTrigger>
						{description != null ? <FieldDescription>{description}</FieldDescription> : null}
						<FieldError>{errorMessage}</FieldError>
						<SelectPopover placement={placement}>
							<SelectListBox>{children}</SelectListBox>
						</SelectPopover>
					</Fragment>
				);
			}}
		</Select>
	);
}

export { SelectListBoxItem as SelectItem };
