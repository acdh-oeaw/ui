"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactElement, ReactNode, SVGProps } from "react";

import { useStylesContext } from "@/src/primitives/styles-context";

export const iconStyles = styles({
	base: ["inline-flex shrink-0 *:[svg]:size-full"],
	variants: {
		size: {
			line: ["size-[1lh]"],
			sm: ["size-4"],
			md: ["size-4"],
			lg: ["size-5"],
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
}

export function Icon(props: Readonly<IconProps>): ReactNode {
	const { children, className, size, tone, ...rest } = useStylesContext(props);

	return (
		<span {...rest} aria-hidden={true} className={iconStyles({ className, size, tone })}>
			{children}
		</span>
	);
}
