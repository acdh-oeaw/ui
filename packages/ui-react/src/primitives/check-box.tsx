"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import { CheckIcon, MinusIcon } from "lucide-react";
import type { ReactNode } from "react";

import { useFieldContext } from "@/src/primitives/field-context";
import { Icon } from "@/src/primitives/icon";
import { useStylesContext } from "@/src/primitives/styles-context";

export const checkBoxStyles = styles({
	base: [
		"relative inline-grid place-items-center rounded-weak border border-stroke-strong",
		"selected:bg-fill-brand-strong selected:text-text-inverse-strong",
	],
	variants: {
		size: {
			sm: ["size-4"],
			md: ["size-5"],
			lg: ["size-6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type CheckBoxStylesProps = GetVariantProps<typeof checkBoxStyles>;

export interface CheckBoxProps extends CheckBoxStylesProps {
	className?: string;
	isDisabled?: boolean;
	isInvalid?: boolean;
	isIndeterminate?: boolean;
	isSelected?: boolean;
}

export function CheckBox(props: Readonly<CheckBoxProps>): ReactNode {
	const { className, size, ...rest } = useStylesContext(props);

	// NOTE: `isIndeterminate` and `isSelected` are passed via `FieldContext`, even
	// though these props are not included in the `FieldContextValue` type, to avoid
	// a separate `CheckBoxState` context.
	const { isDisabled, isIndeterminate, isInvalid, isSelected } = useFieldContext(props);

	return (
		<div
			{...rest}
			className={checkBoxStyles({ className, size })}
			data-disabled={isDisabled === true || undefined}
			data-invalid={isInvalid === true || undefined}
			data-rac={true}
			data-selected={isSelected === true || undefined}
		>
			{isSelected === true ? (
				<Icon size="full" tone="inverse">
					<CheckIcon />
				</Icon>
			) : isIndeterminate === true ? (
				<Icon size="full" tone="inverse">
					<MinusIcon />
				</Icon>
			) : null}
		</div>
	);
}
