"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";

import { useStylesContext } from "@/src/primitives/styles-context";

export const badgeStyles = styles({
	base: ["inline-flex items-center rounded-full border whitespace-nowrap"],
	variants: {
		size: {
			sm: ["h-6 gap-x-1 px-2 py-0.5 text-sm/5"],
			md: ["h-8 gap-x-1 px-2 py-1 text-base/6"],
			lg: ["h-8 gap-x-1 px-2 py-1 text-base/6"],
		},
		tone: {
			brand: ["border-stroke-brand-weak bg-fill-brand-weak text-text-brand"],
			neutral: ["border-stroke-weak bg-fill-weak text-text-weak"],
			inverse: ["border-stroke-inverse-weak bg-fill-inverse-weak text-text-inverse-weak"],
			negative: ["border-stroke-negative-weak bg-fill-negative-weak text-text-negative"],
			positive: ["border-stroke-positive-weak bg-fill-positive-weak text-text-positive"],
			warning: ["border-stroke-warning-weak bg-fill-warning-weak text-text-warning"],
			informative: [
				"border-stroke-informative-weak bg-fill-informative-weak text-text-informative",
			],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
		tone: "neutral",
	},
});

export type BadgeStylesProps = GetVariantProps<typeof badgeStyles>;

export interface BadgeProps extends BadgeStylesProps {
	children: ReactNode;
	className?: string;
}

export function Badge(props: Readonly<BadgeProps>): ReactNode {
	const { children, className, size, tone, ...rest } = useStylesContext(props);

	return (
		<span {...rest} className={badgeStyles({ className, size, tone })}>
			{children}
		</span>
	);
}
