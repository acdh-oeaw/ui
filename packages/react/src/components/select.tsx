import { ChevronDownIcon } from "lucide-react";
import type { ElementRef, ReactNode } from "react";
import {
	Button as AriaButton,
	composeRenderProps,
	Select as AriaSelect,
	type SelectProps as AriaSelectProps,
	SelectValue as AriaSelectValue,
} from "react-aria-components";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { DropdownItem, DropdownSection, Listbox } from "@/components/listbox";
import { Popover } from "@/components/popover";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";
import type { FieldProps } from "@/types/field";

export const selectStyles = variants({
	base: "group flex flex-col gap-1",
});

export type SelectStyles = VariantProps<typeof selectStyles>;

export const selectTriggerStyles = compose(
	focusRing,
	variants({
		base: "flex w-full min-w-[150px] cursor-default items-center gap-4 rounded-lg border border-black/10 bg-neutral-50 py-2 pl-3 pr-2 text-start shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition",
		variants: {
			isDisabled: {
				false:
					"text-neutral-800 group-invalid:border-red-600 hover:bg-neutral-100 pressed:bg-neutral-200 forced-colors:group-invalid:border-[Mark]",
				true: "text-neutral-200 forced-colors:border-[GrayText] forced-colors:text-[GrayText]",
			},
		},
	}),
);

export type SelectTriggerStyles = VariantProps<typeof selectTriggerStyles>;

export interface SelectProps<T extends object>
	extends Omit<AriaSelectProps<T>, "children">,
		FieldProps,
		SelectStyles {
	children: ReactNode | ((item: T) => ReactNode);
	items?: Iterable<T>;
}

export const Select = forwardRef(function Select<T extends object>(
	props: SelectProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaSelect>>,
) {
	const { children, className, description, errorMessage, items, label, ...rest } = props;

	return (
		<AriaSelect<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return selectStyles({ ...renderProps, className });
			})}
		>
			{label != null ? <Label>{label}</Label> : null}
			<AriaButton className={selectTriggerStyles}>
				<AriaSelectValue className="flex-1 text-sm placeholder-shown:italic" />
				<ChevronDownIcon
					aria-hidden={true}
					className="size-4 shrink-0 text-neutral-600 group-disabled:text-neutral-200 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
				/>
			</AriaButton>
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
			<Popover className="min-w-[--trigger-width]">
				<Listbox
					items={items}
					className="max-h-[inherit] overflow-auto p-1 outline-none [clip-path:inset(0_0_0_0_round_.75rem)]"
				>
					{children}
				</Listbox>
			</Popover>
		</AriaSelect>
	);
});

export const SelectItem = DropdownItem;

export const SelectSection = DropdownSection;
