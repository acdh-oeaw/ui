"use client";

import { Fragment, type ReactNode } from "react";
import { composeRenderProps } from "react-aria-components";

import { SelectButton, type SelectButtonProps } from "@/src/primitives/select-button";
import { SelectTriggerIcon } from "@/src/primitives/select-trigger-icon";

export interface SelectTriggerProps extends SelectButtonProps {}

export function SelectTrigger(props: Readonly<SelectTriggerProps>): ReactNode {
	const { children, ...rest } = props;

	return (
		<SelectButton {...rest}>
			{composeRenderProps(children, (children) => {
				return (
					<Fragment>
						{children}
						<SelectTriggerIcon />
					</Fragment>
				);
			})}
		</SelectButton>
	);
}
