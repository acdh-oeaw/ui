import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	Select as AriaSelect,
	type SelectProps as AriaSelectProps,
} from "react-aria-components";

interface SelectFieldProps extends AriaSelectProps {}

export function SelectField(props: Readonly<SelectFieldProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaSelect
			{...rest}
			className={composeRenderProps(className, (className) => {
				return cn("flex flex-col gap-y-1", className);
			})}
		>
			{children}
		</AriaSelect>
	);
}
