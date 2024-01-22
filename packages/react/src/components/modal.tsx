"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	Modal as AriaModal,
	ModalOverlay as AriaModalOverlay,
	type ModalOverlayProps as AriaModalOverlayProps,
	type ModalOverlayProps as AriaModalProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const modalOverlayStyles = variants({
	base: "fixed left-0 top-0 isolate z-20 flex h-[--visual-viewport-height] w-full items-center justify-center bg-black/15 p-4 text-center backdrop-blur-lg",
	variants: {
		isEntering: {
			true: "duration-200 ease-out animate-in fade-in",
		},
		isExiting: {
			true: "duration-200 ease-in animate-out fade-out",
		},
	},
});

export type ModalOverlayStyles = VariantProps<typeof modalOverlayStyles>;

export interface ModalOverlayProps extends AriaModalOverlayProps, ModalOverlayStyles {}

export const ModalOverlay = forwardRef(function ModalOverlay(
	props: ModalOverlayProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaModalOverlay>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaModalOverlay
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return modalOverlayStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaModalOverlay>
	);
});

export const modalStyles = variants({
	base: "max-h-full w-full max-w-lg rounded-lg border border-background/10 bg-background bg-clip-padding text-foreground shadow-lg forced-colors:bg-[Canvas]",
	variants: {
		isEntering: {
			true: "duration-200 ease-out animate-in zoom-in-95",
		},
		isExiting: {
			true: "duration-200 ease-in animate-out zoom-out-95",
		},
	},
});

export type ModalStyles = VariantProps<typeof modalStyles>;

export interface ModalProps extends AriaModalProps, ModalStyles {}

export const Modal = forwardRef(function Modal(
	props: ModalProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaModal>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaModal
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return modalStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaModal>
	);
});
