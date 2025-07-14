"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactElement, ReactNode, SVGProps } from "react";

import { useStylesContext } from "@/src/primitives/styles-context";

export const iconStyles = styles({
	base: ["inline-flex shrink-0", "disabled:text-icon-disabled", "*:[svg]:size-full"],
	variants: {
		size: {
			line: ["size-[1lh]"],
			sm: ["size-4"],
			md: ["size-5"],
			lg: ["size-6"],
			full: ["size-full"],
		},
		tone: {
			brand: ["text-icon-brand"],
			neutral: ["text-icon-neutral"],
			inverse: ["text-icon-inverse"],
			negative: ["text-icon-negative"],
			positive: ["text-icon-positive"],
			warning: ["text-icon-warning"],
			informative: ["text-icon-informative"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
		tone: "neutral",
	},
});

export type IconStylesProps = GetVariantProps<typeof iconStyles>;

export interface IconProps extends IconStylesProps {
	children: ReactElement<SVGProps<SVGSVGElement>>;
	className?: string;
	isDisabled?: boolean;
}

export function Icon(props: Readonly<IconProps>): ReactNode {
	const { children, className, isDisabled, size, tone, ...rest } = useStylesContext(props);

	return (
		<span
			{...rest}
			aria-hidden={true}
			className={iconStyles({ className, size, tone })}
			data-disabled={isDisabled === true || undefined}
			data-rac={true}
		>
			{children}
		</span>
	);
}
