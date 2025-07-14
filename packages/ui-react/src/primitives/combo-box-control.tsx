"use client";

import { Fragment, type ReactNode } from "react";
import { composeRenderProps } from "react-aria-components";

import {
	ComboBoxInputGroup,
	type ComboBoxInputGroupProps,
} from "@/src/primitives/combo-box-input-group";
import { ComboBoxTrigger } from "@/src/primitives/combo-box-trigger";
import { ComboBoxTriggerIcon } from "@/src/primitives/combo-box-trigger-icon";

export interface ComboBoxControlProps extends ComboBoxInputGroupProps {}

export function ComboBoxControl(props: Readonly<ComboBoxControlProps>): ReactNode {
	const { children, ...rest } = props;

	return (
		<ComboBoxInputGroup {...rest}>
			{composeRenderProps(children, (children) => {
				return (
					<Fragment>
						{children}
						<ComboBoxTrigger>
							<ComboBoxTriggerIcon />
						</ComboBoxTrigger>
					</Fragment>
				);
			})}
		</ComboBoxInputGroup>
	);
}
