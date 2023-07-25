import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	TextField as AriaTextField,
	type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components";

interface TextInputFieldProps extends AriaTextFieldProps {}

export function TextInputField(props: Readonly<TextInputFieldProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaTextField
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn("flex flex-col gap-y-1", className);
			})}
		>
			{children}
		</AriaTextField>
	);
}
