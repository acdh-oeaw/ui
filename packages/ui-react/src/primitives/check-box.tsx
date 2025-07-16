"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import { CheckIcon, MinusIcon } from "lucide-react";
import type { ReactNode } from "react";

import { useCheckBoxState } from "@/src/primitives/check-box-state";
import { useFieldContext } from "@/src/primitives/field-context";
import { Icon } from "@/src/primitives/icon";
import { useStylesContext } from "@/src/primitives/styles-context";

export const checkBoxStyles = styles({
	base: [
		"relative inline-grid place-items-center rounded-weak border border-stroke-strong",
		"selected:bg-fill-brand-strong selected:text-icon-inverse",
	],
	variants: {
		size: {
			sm: ["size-4 p-0.5"],
			md: ["size-5 p-0.5"],
			lg: ["size-6 p-0.5"],
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

	const { isDisabled, isInvalid } = useFieldContext(props);
	const { isIndeterminate, isSelected } = useCheckBoxState();

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
				<Icon size="full" tone="inverse-strong">
					<CheckIcon className="stroke-3" />
				</Icon>
			) : isIndeterminate === true ? (
				<Icon size="full" tone="inverse-strong">
					<MinusIcon className="stroke-3" />
				</Icon>
			) : null}
		</div>
	);
}
