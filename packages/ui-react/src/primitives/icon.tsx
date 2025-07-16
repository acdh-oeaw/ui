"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactElement, ReactNode, SVGProps } from "react";

import { useStylesContext } from "@/src/primitives/styles-context";

export const iconStyles = styles({
	base: ["inline-flex shrink-0", "*:[svg]:size-full"],
	variants: {
		size: {
			line: ["size-[1lh]"],
			sm: ["size-4"],
			md: ["size-5"],
			lg: ["size-6"],
			full: ["size-full"],
		},
		tone: {
			brand: ["text-icon-brand", "disabled:text-icon-disabled"],
			neutral: ["text-icon-neutral", "disabled:text-icon-disabled"],
			inverse: ["text-icon-inverse", "disabled:text-icon-inverse-disabled"],
			"inverse-strong": ["text-icon-inverse-strong", "disabled:text-icon-inverse-disabled"],
			negative: ["text-icon-negative", "disabled:text-icon-disabled"],
			positive: ["text-icon-positive", "disabled:text-icon-disabled"],
			warning: ["text-icon-warning", "disabled:text-icon-disabled"],
			informative: ["text-icon-informative", "disabled:text-icon-disabled"],
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
