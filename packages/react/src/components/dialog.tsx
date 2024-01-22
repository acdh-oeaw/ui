"use client";

import { chain } from "@react-aria/utils";
import { XIcon } from "lucide-react";
import { type ComponentPropsWithoutRef, type ElementRef, useContext } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	Dialog as AriaDialog,
	type DialogProps as AriaDialogProps,
	DialogTrigger as AriaDialogTrigger,
	Heading as AriaHeading,
	type HeadingProps as AriaHeadingProps,
	OverlayTriggerStateContext as AriaOverlayTriggerStateContext,
	Text as AriaText,
	type TextProps as AriaTextProps,
} from "react-aria-components";

import { Button, type ButtonProps } from "@/components/button";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const dialogStyles = variants({
	base: "relative grid max-h-[inherit] gap-4 overflow-auto p-6 outline outline-0 [[data-placement]>&]:p-4",
});

export type DialogStyles = VariantProps<typeof dialogStyles>;

export interface DialogProps extends AriaDialogProps, DialogStyles {}

export const Dialog = forwardRef(function Dialog(
	props: DialogProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaDialog>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaDialog ref={forwardedRef} {...rest} className={dialogStyles({ className })}>
			{children}
		</AriaDialog>
	);
});

export const dialogHeaderStyles = variants({
	base: "flex flex-col gap-y-2 text-center sm:text-left",
});

export type DialogHeaderStyles = VariantProps<typeof dialogHeaderStyles>;

export interface DialogHeaderProps extends ComponentPropsWithoutRef<"header">, DialogHeaderStyles {}

export const DialogHeader = forwardRef(function DialogHeader(
	props: DialogHeaderProps,
	forwardedRef: ForwardedRef<ElementRef<"header">>,
) {
	const { children, className, ...rest } = props;

	return (
		<header ref={forwardedRef} {...rest} className={dialogHeaderStyles({ className })}>
			{children}
		</header>
	);
});

export const dialogTitleStyles = variants({
	base: "text-lg font-semibold leading-none tracking-tight",
});

export type DialogTitleStyles = VariantProps<typeof dialogTitleStyles>;

export interface DialogTitleProps extends AriaHeadingProps, DialogTitleStyles {}

export const DialogTitle = forwardRef(function DialogTitle(
	props: DialogTitleProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaHeading>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaHeading
			ref={forwardedRef}
			{...rest}
			className={dialogTitleStyles({ className })}
			slot="title"
		>
			{children}
		</AriaHeading>
	);
});

export const dialogDescriptionStyles = variants({
	base: "text-sm text-muted-foreground",
});

export type DialogDescriptionStyles = VariantProps<typeof dialogDescriptionStyles>;

export interface DialogDescriptionProps extends AriaTextProps, DialogDescriptionStyles {}

export const DialogDescription = forwardRef(function DialogDescription(
	props: DialogDescriptionProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaText>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaText
			ref={forwardedRef}
			{...rest}
			className={dialogDescriptionStyles({ className })}
			// TODO: connect via aria-describedby
			slot="description"
		>
			{children}
		</AriaText>
	);
});

export const dialogFooterStyles = variants({
	base: "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
});

export type DialogFooterStyles = VariantProps<typeof dialogFooterStyles>;

export interface DialogFooterProps extends ComponentPropsWithoutRef<"footer">, DialogFooterStyles {}

export const DialogFooter = forwardRef(function DialogFooter(
	props: DialogFooterProps,
	forwardedRef: ForwardedRef<ElementRef<"footer">>,
) {
	const { children, className, ...rest } = props;

	return (
		<footer ref={forwardedRef} {...rest} className={dialogFooterStyles({ className })}>
			{children}
		</footer>
	);
});

export const dialogCloseButtonStyles = variants({
	base: "absolute right-4 top-4 cursor-default rounded-sm opacity-70 transition hover:opacity-100 pressed:opacity-90",
});

export type DialogCloseButtonStyles = VariantProps<typeof dialogCloseButtonStyles>;

export interface DialogCloseButtonProps
	extends Omit<AriaButtonProps, "children">,
		DialogCloseButtonStyles {}

export const DialogCloseButton = forwardRef(function DialogCloseButton(
	props: DialogCloseButtonProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaButton>>,
) {
	const { className, onPress, ...rest } = props;

	// eslint-disable-next-line @typescript-eslint/unbound-method
	const { close } = useContext(AriaOverlayTriggerStateContext);

	// TODO: should be IconButton
	return (
		<AriaButton
			ref={forwardedRef}
			{...rest}
			className={dialogCloseButtonStyles({ className })}
			onPress={chain(onPress, close)}
		>
			<XIcon aria-hidden={true} className="size-4 shrink-0" />
			{/* TODO: i18n */}
			<span className="sr-only">Close</span>
		</AriaButton>
	);
});

export const dialogActionButtonStyles = variants({});

export type DialogActionButtonStyles = VariantProps<typeof dialogActionButtonStyles>;

export interface DialogActionButtonProps extends ButtonProps, DialogActionButtonStyles {}

export const DialogActionButton = forwardRef(function DialogActionButton(
	props: DialogActionButtonProps,
	forwardedRef: ForwardedRef<ElementRef<typeof Button>>,
) {
	const { className, children, onPress, ...rest } = props;

	// eslint-disable-next-line @typescript-eslint/unbound-method
	const { close } = useContext(AriaOverlayTriggerStateContext);

	return (
		<Button
			ref={forwardedRef}
			{...rest}
			className={dialogActionButtonStyles({ className })}
			onPress={chain(onPress, close)}
		>
			{children}
		</Button>
	);
});

export const dialogCancelButtonStyles = variants({});

export type DialogCancelButtonStyles = VariantProps<typeof dialogCancelButtonStyles>;

export interface DialogCancelButtonProps extends ButtonProps, DialogCancelButtonStyles {}

export const DialogCancelButton = forwardRef(function DialogCancelButton(
	props: DialogCancelButtonProps,
	forwardedRef: ForwardedRef<ElementRef<typeof Button>>,
) {
	const { className, children, onPress, variant = "outline", ...rest } = props;

	// eslint-disable-next-line @typescript-eslint/unbound-method
	const { close } = useContext(AriaOverlayTriggerStateContext);

	return (
		<Button
			ref={forwardedRef}
			{...rest}
			className={dialogCancelButtonStyles({ className })}
			onPress={chain(onPress, close)}
			variant={variant}
		>
			{children}
		</Button>
	);
});

export { AriaDialogTrigger as DialogTrigger };
