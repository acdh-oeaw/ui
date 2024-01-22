import type { ElementRef } from "react";
import { SelectValue } from "react-aria-components";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import {
	Select,
	SelectItem,
	SelectListbox,
	type SelectListboxProps,
	SelectPopover,
	type SelectProps,
	SelectTrigger,
} from "@/components/select";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import type { FieldProps } from "@/types/field";

export interface SelectFieldProps<T extends object>
	extends SelectProps<T>,
		Pick<SelectListboxProps<T>, "items">,
		FieldProps {}

export const SelectField = forwardRef(function SelectField<T extends object>(
	props: SelectFieldProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof Select>>,
) {
	const { children, description, errorMessage, items, label, ...rest } = props;

	return (
		<Select ref={forwardedRef} {...rest}>
			{label != null ? <Label>{label}</Label> : null}
			<SelectTrigger>
				<SelectValue />
			</SelectTrigger>
			<SelectPopover>
				<SelectListbox items={items}>{children}</SelectListbox>
			</SelectPopover>
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
		</Select>
	);
});

export { SelectItem };
