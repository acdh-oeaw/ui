import type { ElementRef } from "react";
import {
	Modal as AriaModal,
	ModalOverlay as AriaModalOverlay,
	type ModalOverlayProps as AriaModalOverlayProps,
	type ModalProps as AriaModalProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const modalOverlayStyles = variants({
	base: "fixed left-0 top-0 isolate z-20 flex h-[--visual-viewport-height] w-full items-center justify-center bg-black/[15%] p-4 text-center backdrop-blur-lg",
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

export const modalStyles = variants({
	base: "max-h-full w-full max-w-md rounded-2xl border border-black/10 bg-white bg-clip-padding text-left align-middle text-slate-700 shadow-2xl dark:border-white/10 dark:bg-zinc-800/70 dark:text-zinc-300 dark:backdrop-blur-2xl dark:backdrop-saturate-200 forced-colors:bg-[Canvas]",
	variants: {
		isEntering: {
			true: "duration-200 ease-out animate-in zoom-in-105",
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
		<AriaModalOverlay ref={forwardedRef} {...rest} className={modalOverlayStyles}>
			<AriaModal {...rest} className={modalStyles}>
				{children}
			</AriaModal>
		</AriaModalOverlay>
	);
});
