"use client";

import { ChevronDownIcon } from "lucide-react";
import type { ElementRef, ReactNode } from "react";
import {
	ComboBox as AriaCombobox,
	type ComboBoxProps as AriaComboboxProps,
	composeRenderProps,
} from "react-aria-components";

import { Button } from "@/components/button";
import {
	DropdownItem,
	type DropdownItemProps,
	DropdownSection,
	type DropdownSectionProps,
} from "@/components/dropdown";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { FieldGroup } from "@/components/field-group";
import { Label } from "@/components/label";
import { Listbox } from "@/components/listbox";
import { Popover } from "@/components/popover";
import { TextInput } from "@/components/text-input";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";
import type { FieldProps } from "@/types/field";

export const comboboxStyles = variants({
	base: "group flex flex-col gap-1",
});

export type ComboboxStyles = VariantProps<typeof comboboxStyles>;

export interface ComboboxProps<T extends object>
	extends Omit<AriaComboboxProps<T>, "children">,
		FieldProps,
		ComboboxStyles {
	children: ReactNode | ((item: T) => ReactNode);
}

export const Combobox = forwardRef(function Combobox<T extends object>(
	props: ComboboxProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaCombobox>>,
) {
	const { children, className, description, errorMessage, items, label, ...rest } = props;

	return (
		<AriaCombobox<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return comboboxStyles({ ...renderProps, className });
			})}
		>
			{label != null ? <Label>{label}</Label> : null}
			<FieldGroup>
				<TextInput />
				<Button className="mr-1 w-6 rounded outline-offset-0" variant="icon">
					<ChevronDownIcon aria-hidden={true} className="size-4 shrink-0" />
				</Button>
			</FieldGroup>
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
			<Popover className="w-[--trigger-width]">
				<Listbox
					items={items}
					className="max-h-[inherit] overflow-auto p-1 outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]"
				>
					{children}
				</Listbox>
			</Popover>
		</AriaCombobox>
	);
});

export interface ComboboxItemProps<T extends object> extends DropdownItemProps<T> {}

export const ComboboxItem = DropdownItem;

export interface ComboboxSectionProps<T extends object> extends DropdownSectionProps<T> {}

export const ComboboxSection = DropdownSection;
