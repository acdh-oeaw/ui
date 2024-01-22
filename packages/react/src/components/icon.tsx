"use client";

import { useLabels } from "@react-aria/utils";
import type { LucideIcon } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const iconStyles = variants({
	base: [],
	// variants: {
	// 	size: {
	// 		xs: [],
	// 		sm: [],
	// 		md: [],
	// 	},
	// },
});

export type IconStyles = VariantProps<typeof iconStyles>;

export interface IconProps extends ComponentPropsWithoutRef<LucideIcon>, IconStyles {
	icon: LucideIcon;
}

export const Icon = forwardRef(function Icon(
	props: IconProps,
	forwardedRef: ForwardedRef<ElementRef<LucideIcon>>,
) {
	const { className, icon: IconSvg, ...rest } = props;

	const labelProps = useLabels(rest);

	const isAriaHidden = props["aria-hidden"] === true || props["aria-hidden"] === "true";
	const isLabelled = labelProps["aria-label"] != null || labelProps["aria-labelledby"] != null;

	return (
		<IconSvg
			ref={forwardedRef}
			{...rest}
			{...labelProps}
			aria-hidden={isAriaHidden || !isLabelled}
			className={iconStyles({ className })}
		/>
	);
});
