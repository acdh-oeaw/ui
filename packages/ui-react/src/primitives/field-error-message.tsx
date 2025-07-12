import { cn } from "@acdh-oeaw/style-variants";
import { AlertTriangleIcon } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { composeRenderProps } from "react-aria-components";

import { FieldError, type FieldErrorProps } from "@/src/primitives/field-error";
import { Icon } from "@/src/primitives/icon";

interface FieldErrorMessageProps extends FieldErrorProps {}

export function FieldErrorMessage(props: Readonly<FieldErrorMessageProps>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<FieldError {...rest} className={cn(["inline-flex gap-x-2"], className)}>
			{composeRenderProps(children, (children) => {
				return (
					<Fragment>
						<Icon tone="negative">
							<AlertTriangleIcon />
						</Icon>
						{children}
					</Fragment>
				);
			})}
		</FieldError>
	);
}
