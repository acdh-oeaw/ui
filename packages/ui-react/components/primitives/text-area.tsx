import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	TextArea as AriaTextArea,
	type TextAreaProps as AriaTextAreaProps,
} from "react-aria-components";

const textAreaStyles = styles({
	base: [
		"rounded-md border border-stroke-strong text-text-strong placeholder:text-text-weaker",
		"outline-stroke-focus focus:outline-2 focus:outline-offset-0",
		"disabled:border-stroke-disabled disabled:text-text-disabled",
	],
	variants: {
		size: {
			sm: ["min-h-9 gap-x-2 px-2.5 py-1.75 text-sm/5"],
			md: ["min-h-10 gap-x-2 px-3 py-1.75 text-base/6"],
			lg: ["min-h-11 gap-x-2 px-3.5 py-2.25 text-base/6"],
		},
	},
	defaults: {
		size: "md",
	},
});

type TextAreaStylesProps = GetVariantProps<typeof textAreaStyles>;

interface TextAreaProps extends Omit<AriaTextAreaProps, "size">, TextAreaStylesProps {}

export function TextArea(props: Readonly<TextAreaProps>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaTextArea
			{...rest}
			className={composeRenderProps(className, (className) => {
				return textAreaStyles({ className, size });
			})}
		>
			{children}
		</AriaTextArea>
	);
}
