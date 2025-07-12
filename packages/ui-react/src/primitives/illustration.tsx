"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactElement, ReactNode, SVGProps } from "react";

import { useStylesContext } from "@/src/primitives/styles-context";

export const iconStyles = styles({
	base: ["inline-grid shrink-0 place-items-center leading-0 *:[svg]:size-full"],
	variants: {
		size: {
			sm: ["size-12"],
			md: ["size-16"],
			lg: ["size-24"],
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

export type IllustrationStylesProps = GetVariantProps<typeof iconStyles>;

export interface IllustrationProps extends IllustrationStylesProps {
	children: ReactElement<SVGProps<SVGSVGElement>>;
	className?: string;
}

export function Illustration(props: Readonly<IllustrationProps>): ReactNode {
	const { children, className, size, tone, ...rest } = useStylesContext(props);

	return (
		<span {...rest} aria-hidden={true} className={iconStyles({ className, size, tone })}>
			{children}
		</span>
	);
}
