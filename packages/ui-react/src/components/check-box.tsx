import { Fragment, type ReactNode } from "react";
import { composeRenderProps } from "react-aria-components";

import { CheckBoxBox } from "@/src/primitives/check-box-box";
import { CheckBoxField, type CheckBoxFieldProps } from "@/src/primitives/check-box-field";

export interface CheckBoxProps extends CheckBoxFieldProps {}

export function CheckBox(props: Readonly<CheckBoxProps>): ReactNode {
	const { children, ...rest } = props;

	return (
		<CheckBoxField>
			{composeRenderProps(children, (children) => {
				return (
					<Fragment {...rest}>
						<CheckBoxBox />
						{children}
					</Fragment>
				);
			})}
		</CheckBoxField>
	);
}
