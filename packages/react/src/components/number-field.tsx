import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { type ElementRef, Fragment } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
	NumberField as AriaNumberField,
	type NumberFieldProps as AriaNumberFieldProps,
} from "react-aria-components";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { _fieldBorderStyles, FieldGroup } from "@/components/field-group";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";
import type { FieldProps } from "@/types/field";

export const numberFieldStyles = variants({
	base: "group flex flex-col gap-1",
});

export type NumberFieldStyles = VariantProps<typeof numberFieldStyles>;

const _borderStyles = variants({
	variants: _fieldBorderStyles.variants,
});

export interface NumberFieldProps
	extends Omit<AriaNumberFieldProps, "children">,
		FieldProps,
		NumberFieldStyles {}

export const NumberField = forwardRef(function NumberField(
	props: NumberFieldProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaNumberField>>,
) {
	const { className, description, errorMessage, label, ...rest } = props;

	return (
		<AriaNumberField
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return numberFieldStyles({ ...renderProps, className });
			})}
		>
			{label != null ? <Label>{label}</Label> : null}
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
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
		</AriaNumberField>
	);
});

function StepperButton(props: AriaButtonProps) {
	return (
		<AriaButton
			{...props}
			className="cursor-default px-0.5 text-neutral-500 pressed:bg-neutral-100 group-disabled:text-neutral-200 forced-colors:group-disabled:text-[GrayText]"
		/>
	);
}
