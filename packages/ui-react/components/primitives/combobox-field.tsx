import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	ComboBox as AriaComboBox,
	type ComboBoxProps as AriaComboBoxProps,
	composeRenderProps,
} from "react-aria-components";

interface ComboBoxFieldProps<T extends object> extends AriaComboBoxProps<T> {}

export function ComboBoxField<T extends object>(props: Readonly<ComboBoxFieldProps<T>>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaComboBox
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn("flex flex-col gap-y-1", className);
			})}
		>
			{children}
		</AriaComboBox>
	);
}
