import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	Input as AriaInput,
	type InputProps as AriaInputProps,
} from "react-aria-components";

const inputStyles = styles({
	base: [
		"rounded-md border border-stroke-strong text-text-strong placeholder:text-text-weaker",
		"outline-stroke-focus focus:outline-2 focus:outline-offset-0",
		"disabled:border-stroke-disabled disabled:text-text-disabled",
	],
	variants: {
		size: {
			sm: ["h-9 gap-x-2 px-2.5 py-1.75 text-sm/5"],
			md: ["h-10 gap-x-2 px-3 py-1.75 text-base/6"],
			lg: ["h-11 gap-x-2 px-3.5 py-2.25 text-base/6"],
		},
	},
	defaults: {
		size: "md",
	},
});

type InputStylesProps = GetVariantProps<typeof inputStyles>;

interface InputProps extends Omit<AriaInputProps, "size">, InputStylesProps {}

export function Input(props: Readonly<InputProps>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaInput
			{...rest}
			className={composeRenderProps(className, (className) => {
				return inputStyles({ className, size });
			})}
		>
			{children}
		</AriaInput>
	);
}
