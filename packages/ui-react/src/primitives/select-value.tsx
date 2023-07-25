"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	SelectValue as AriaSelectValue,
	type SelectValueProps as AriaSelectValueProps,
} from "react-aria-components";

/** @internal */
export const selectValueStyles = styles({
	base: ["placeholder-shown:text-text-weaker placeholder-shown:italic"],
	variants: {
		size: {
			sm: ["px-3.5 py-[calc(--spacing(2)-1px)] text-sm/5"],
			md: ["px-4 py-[calc(--spacing(2.5)-1px)] text-sm/5"],
			lg: ["px-4.5 py-[calc(--spacing(2.5)-1px)] text-base/6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

/** @internal */
export type SelectValueStylesProps = GetVariantProps<typeof selectValueStyles>;

export interface SelectValueProps<T extends object>
	extends AriaSelectValueProps<T>,
		SelectValueStylesProps {}

export function SelectValue<T extends object>(props: Readonly<SelectValueProps<T>>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaSelectValue
			{...rest}
			className={composeRenderProps(className, (className) => {
				return selectValueStyles({ className, size });
			})}
		>
			{children}
		</AriaSelectValue>
	);
}
