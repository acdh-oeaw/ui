import { cn } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import { Form as AriaForm, type FormProps as AriaFormProps } from "react-aria-components";

interface FormProps extends AriaFormProps {}

export function Form(props: Readonly<FormProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<AriaForm {...rest} className={cn("flex flex-col gap-y-6", className)}>
			{children}
		</AriaForm>
	);
}
