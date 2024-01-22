"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Fragment } from "react";
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components";

import { FieldGroup } from "@/components/field-group";
import { Input, type InputProps } from "@/components/input";
import { forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

const _borderStyles = variants({
	variants: {
		isFocusWithin: {
			false: "border-input forced-colors:border-[ButtonBorder]",
			true: "border-foreground forced-colors:border-[Highlight]",
		},
		isInvalid: {
			true: "border-negative forced-colors:border-[Mark]",
		},
		isDisabled: {
			true: "forced-colors:border-[GrayText]",
		},
	},
});

export type NumberInputStyles = VariantProps<typeof _borderStyles>;

export interface NumberInputProps extends InputProps, NumberInputStyles {}

// FIXME: where to forward ref and props - or break this component further down?
export const NumberInput = forwardRef(function NumberInput(
	props: NumberInputProps,
	forwardedRef: ForwardedRef<ElementRef<typeof FieldGroup>>,
) {
	return (
		<FieldGroup>
			{(renderProps) => {
				return (
					<Fragment>
						<Input />
						<div
							className={_borderStyles({
								...renderProps,
								className: "flex flex-col border-s-2",
							})}
						>
							<StepperButton slot="increment">
								<ChevronUpIcon aria-hidden={true} className="size-4 shrink-0" />
							</StepperButton>
							<div className={_borderStyles({ ...renderProps, className: "border-b-2" })} />
							<StepperButton slot="decrement">
								<ChevronDownIcon aria-hidden={true} className="size-4 shrink-0" />
							</StepperButton>
						</div>
					</Fragment>
				);
			}}
		</FieldGroup>
	);
});

function StepperButton(props: AriaButtonProps) {
	return (
		<AriaButton
			{...props}
			className="cursor-default px-0.5 text-muted-foreground pressed:bg-muted forced-colors:group-disabled:text-[GrayText]"
		/>
	);
}
