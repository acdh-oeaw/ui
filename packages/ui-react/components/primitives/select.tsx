import { cn, type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import { ChevronDownIcon } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
	SelectValue as AriaSelectValue,
	type SelectValueProps as AriaSelectValueProps,
} from "react-aria-components";

const selectButtonStyles = styles({
	base: [
		"group relative isolate inline-flex items-baseline justify-between rounded-md border border-stroke-strong text-left whitespace-nowrap transition select-none",
		"outline-stroke-focus focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-0 forced-colors:outline-[Highlight]",
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

type SelectButtonStylesProps = GetVariantProps<typeof selectButtonStyles>;

interface SelectButtonProps extends AriaButtonProps, SelectButtonStylesProps {}

export function SelectButton(props: Readonly<SelectButtonProps>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaButton
			{...rest}
			className={composeRenderProps(className, (className) => {
				return selectButtonStyles({ className, size });
			})}
		>
			{typeof children === "function" ? (
				children
			) : (
				<Fragment>
					<SelectValue />
					<ChevronDownIcon
						aria-hidden={true}
						className="-mr-1 shrink-0 self-center text-icon-neutral group-disabled:text-icon-disabled"
						data-slot="icon"
					/>
				</Fragment>
			)}
		</AriaButton>
	);
}

interface SelectValueProps<T extends object> extends AriaSelectValueProps<T> {}

export function SelectValue<T extends object>(props: Readonly<SelectValueProps<T>>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaSelectValue
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn(
					"text-text-strong placeholder-shown:text-text-weaker",
					"group-disabled:placeholder-shown:text-text-disabled",
					className,
				);
			})}
		>
			{children}
		</AriaSelectValue>
	);
}
