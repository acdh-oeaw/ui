"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from "react-aria-components";

import { useStylesContext } from "@/src/primitives/styles-context";

export const comboBoxTriggerStyles = styles({
	base: ["inline-grid shrink-0 place-items-center self-stretch"],
	variants: {
		size: {
			sm: ["px-2"],
			md: ["px-2"],
			lg: ["px-2"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type ComboBoxTriggerStylesProps = GetVariantProps<typeof comboBoxTriggerStyles>;

export interface ComboBoxTriggerProps extends AriaButtonProps, ComboBoxTriggerStylesProps {}

export function ComboBoxTrigger(props: Readonly<ComboBoxTriggerProps>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	return (
		<AriaButton
			{...rest}
			className={composeRenderProps(className, (className) => {
				return comboBoxTriggerStyles({ className, size });
			})}
		>
			{children}
		</AriaButton>
	);
}
