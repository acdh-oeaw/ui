"use client";

import {
	ChevronRightIcon,
	type LucideIcon as Icon,
	type LucideProps as IconProps,
} from "lucide-react";
import type { ElementRef } from "react";
import {
	Breadcrumb as AriaBreadcrumb,
	type BreadcrumbProps as AriaBreadcrumbProps,
	Breadcrumbs as AriaBreadcrumbs,
	type BreadcrumbsProps as AriaBreadcrumbsProps,
} from "react-aria-components";

import { Link, type LinkProps } from "@/components/link";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const breadcrumbsStyles = variants({
	base: "flex gap-1 text-sm",
});

export type BreadcrumbsStyles = VariantProps<typeof breadcrumbsStyles>;

export interface BreadcrumbsProps<T extends object>
	extends AriaBreadcrumbsProps<T>,
		BreadcrumbsStyles {}

export const Breadcrumbs = forwardRef(function Breadcrumbs<T extends object>(
	props: BreadcrumbsProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaBreadcrumbs>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaBreadcrumbs<T> ref={forwardedRef} {...rest} className={breadcrumbsStyles({ className })}>
			{children}
		</AriaBreadcrumbs>
	);
});

export const breadcrumbStyles = variants({
	base: "flex items-center gap-1",
});

export type BreadcrumbStyles = VariantProps<typeof breadcrumbStyles>;

export interface BreadcrumbProps extends AriaBreadcrumbProps, BreadcrumbStyles {}

export const Breadcrumb = forwardRef(function Breadcrumb(
	props: BreadcrumbProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaBreadcrumb>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaBreadcrumb ref={forwardedRef} {...rest} className={breadcrumbStyles({ className })}>
			{children}
		</AriaBreadcrumb>
	);
});

export const breadcrumbLinkStyles = variants({
	base: "current:text-foreground",
});

export type BreadcrumbLinkStyles = VariantProps<typeof breadcrumbLinkStyles>;

export interface BreadcrumbLinkProps
	extends Omit<LinkProps, "children">,
		LinkProps,
		BreadcrumbLinkStyles {
	/** @default "text" */
	variant?: LinkProps["variant"];
}

export const BreadcrumbLink = forwardRef(function BreadcrumbLink(
	props: BreadcrumbLinkProps,
	forwardedRef: ForwardedRef<ElementRef<typeof Link>>,
) {
	const { children, className, variant = "text", ...rest } = props;

	return (
		<Link
			ref={forwardedRef}
			{...rest}
			className={breadcrumbLinkStyles({ className })}
			variant={variant}
		>
			{children}
		</Link>
	);
});

export const breadcrumbSeparatorStyles = variants({
	base: "size-3 shrink-0 text-muted-foreground",
});

export type BreadcrumbSeparatorStyles = VariantProps<typeof breadcrumbSeparatorStyles>;

export interface BreadcrumbSeparatorProps extends IconProps, BreadcrumbSeparatorStyles {}

export const BreadcrumbSeparator = forwardRef(function BreadcrumbSeparator(
	props: BreadcrumbSeparatorProps,
	forwardedRef: ForwardedRef<ElementRef<Icon>>,
) {
	const { "aria-hidden": ariaHidden = true, className, ...rest } = props;

	return (
		<ChevronRightIcon
			ref={forwardedRef}
			{...rest}
			aria-hidden={ariaHidden}
			className={breadcrumbSeparatorStyles({ className })}
		/>
	);
});
