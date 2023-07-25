"use client";

import { cn } from "@acdh-oeaw/style-variants";
import { CheckIcon, MinusIcon } from "lucide-react";
import { type ReactNode, use } from "react";

import { CheckBoxStateContext } from "@/src/primitives/check-box-state-context";

export interface CheckBoxBoxProps {
	className?: string;
}

export function CheckBoxBox(props: Readonly<CheckBoxBoxProps>): ReactNode {
	const { className, ...rest } = props;

	const {
		isDisabled,
		isFocused,
		isFocusVisible,
		isHovered,
		isIndeterminate,
		isInvalid,
		isPressed,
		isRequired,
		isSelected,
	} = use(CheckBoxStateContext);

	return (
		<div
			{...rest}
			className={cn(
				[
					"relative isolate inline-grid size-5 shrink-0 place-items-center rounded-sm border border-stroke-strong p-0.5 outline-offset-2 outline-transparent transition",
					"after:pointer-events-none after:absolute after:-inset-px after:-z-10 after:rounded-[inherit] after:transition",
					"hover:after:bg-fill-hover",
					"pressed:after:bg-fill-press",
					"focus:outline-hidden focus-visible:outline-2 focus-visible:outline-stroke-focus",
					"selected:bg-fill-brand-strong selected:text-text-inverse-strong",
					"disabled:cursor-not-allowed",
				],
				className,
			)}
			data-disabled={isDisabled || undefined}
			data-focus-visible={isFocusVisible || undefined}
			data-focused={isFocused || undefined}
			data-hovered={isHovered || undefined}
			data-invalid={isInvalid || undefined}
			data-pressed={isPressed || undefined}
			data-rac={true}
			data-required={isRequired || undefined}
			data-selected={isSelected || undefined}
		>
			{isIndeterminate ? (
				<MinusIcon aria-hidden={true} className="size-full stroke-3" />
			) : isSelected ? (
				<CheckIcon aria-hidden={true} className="size-full stroke-3" />
			) : null}
		</div>
	);
}
