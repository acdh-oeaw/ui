"use client";

import { Fragment, type ReactNode } from "react";
import { composeRenderProps } from "react-aria-components";

import { SelectButton, type SelectButtonProps } from "@/src/primitives/select-button";
import { SelectTrigger } from "@/src/primitives/select-trigger";
import { SelectTriggerIcon } from "@/src/primitives/select-trigger-icon";

export interface SelectControlProps extends SelectButtonProps {}

export function SelectControl(props: Readonly<SelectControlProps>): ReactNode {
	const { children, ...rest } = props;

	return (
		<SelectButton {...rest}>
			{composeRenderProps(children, (children) => {
				return (
					<Fragment>
						{children}
						<SelectTrigger>
							<SelectTriggerIcon />
						</SelectTrigger>
					</Fragment>
				);
			})}
		</SelectButton>
	);
}
