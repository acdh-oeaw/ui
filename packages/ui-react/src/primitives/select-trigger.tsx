"use client";

import { Fragment, type ReactNode } from "react";
import { composeRenderProps } from "react-aria-components";

import { SelectButton, type SelectButtonProps } from "@/src/primitives/select-button";
import { SelectTriggerIcon } from "@/src/primitives/select-trigger-icon";
import { useStylesContext } from "@/src/primitives/styles-context";

export interface SelectTriggerProps extends SelectButtonProps {}

export function SelectTrigger(props: Readonly<SelectTriggerProps>): ReactNode {
	const { children, size, ...rest } = useStylesContext(props);

	return (
		<SelectButton {...rest} size={size}>
			{composeRenderProps(children, (children) => {
				return (
					<Fragment>
						{children}
						<SelectTriggerIcon size={size} />
					</Fragment>
				);
			})}
		</SelectButton>
	);
}
