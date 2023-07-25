import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Text as AriaFieldDescription,
	type TextProps as AriaFieldDescriptionProps,
} from "react-aria-components";

interface FieldDescriptionProps extends Omit<AriaFieldDescriptionProps, "slot"> {}

export function FieldDescription(props: Readonly<FieldDescriptionProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaFieldDescription
			{...rest}
			className={cn("text-sm text-text-weak", className)}
			slot="description"
		>
			{children}
		</AriaFieldDescription>
	);
}
