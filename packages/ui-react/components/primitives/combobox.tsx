import { cn, type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import { ChevronDownIcon } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
	Group as AriaGroup,
	type GroupProps as AriaGroupProps,
	Input as AriaInput,
	type InputProps as AriaInputProps,
} from "react-aria-components";

const comboBoxInputGroupStyles = styles({
	base: [
		"group relative isolate inline-flex items-baseline justify-between rounded-md border border-stroke-strong text-left whitespace-nowrap transition select-none",
		"outline-stroke-focus focus-within:outline-2 focus-within:outline-offset-0 forced-colors:outline-[Highlight]",
		"disabled:border-stroke-disabled disabled:forced-colors:text-[GrayText]",
	],
	variants: {
		size: {
			sm: ["h-9 gap-x-2 px-2.5 py-1.75 text-sm/5", "*:data-[slot=icon]:size-4"],
			md: ["h-10 gap-x-2 px-3 py-1.75 text-base/6", "*:data-[slot=icon]:size-4"],
			lg: ["h-11 gap-x-2 px-3.5 py-2.25 text-base/6", "*:data-[slot=icon]:size-5"],
		},
	},
	defaults: {
		size: "md",
	},
});

type ComboBoxInputGroupStylesProps = GetVariantProps<typeof comboBoxInputGroupStyles>;

interface ComboBoxInputGroupProps extends AriaGroupProps, ComboBoxInputGroupStylesProps {}

export function ComboBoxInputGroup(props: Readonly<ComboBoxInputGroupProps>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaGroup
			{...rest}
			className={composeRenderProps(className, (className) => {
				return comboBoxInputGroupStyles({ className, size });
			})}
		>
			{typeof children === "function" ? (
				children
			) : (
				<Fragment>
					<ComboBoxInput />
					<ComboBoxButton>
						<ChevronDownIcon
							aria-hidden={true}
							className="-mr-1 shrink-0 self-center text-icon-neutral group-disabled:text-icon-disabled"
							data-slot="icon"
						/>
					</ComboBoxButton>
				</Fragment>
			)}
		</AriaGroup>
	);
}

interface ComboBoxInputProps extends AriaInputProps {}

export function ComboBoxInput(props: Readonly<ComboBoxInputProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaInput
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn("placeholder:text-text-weaker focus:outline-hidden", className);
			})}
		>
			{children}
		</AriaInput>
	);
}

interface ComboBoxButtonProps extends AriaButtonProps {}

export function ComboBoxButton(props: Readonly<ComboBoxButtonProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaButton
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn("focus:outline-hidden", className);
			})}
		>
			{children}
		</AriaButton>
	);
}
