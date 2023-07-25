"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactElement, ReactNode, SVGProps } from "react";

/** @internal */
export const iconStyles = styles({
	base: ["inline-grid place-items-center *:[svg]:size-full"],
	variants: {
		size: {
			sm: ["size-4"],
			md: ["size-5"],
			lg: ["size-6"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

/** @internal */
export type IconStylesProps = GetVariantProps<typeof iconStyles>;

export interface IconProps extends IconStylesProps {
	children: ReactElement<SVGProps<SVGSVGElement>>;
	className?: string;
}

export function Icon(props: Readonly<IconProps>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<span {...rest} aria-hidden={true} className={iconStyles({ className, size })} data-rac={true}>
			{children}
		</span>
	);
}
