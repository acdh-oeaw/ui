"use client";

import type { ElementRef } from "react";

import {
	Dialog,
	DialogActionButton,
	DialogCancelButton,
	DialogCloseButton,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	type DialogProps,
	DialogTitle,
	DialogTrigger,
} from "@/components/dialog";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const alertDialogStyles = variants({});

export type AlertDialogStyles = VariantProps<typeof alertDialogStyles>;

export interface AlertDialogProps extends DialogProps, AlertDialogStyles {}

export const AlertDialog = forwardRef(function AlertDialog(
	props: AlertDialogProps,
	forwardedRef: ForwardedRef<ElementRef<typeof Dialog>>,
) {
	const { children, className, ...rest } = props;

	return (
		<Dialog
			ref={forwardedRef}
			role="alertdialog"
			{...rest}
			className={alertDialogStyles({ className })}
		>
			{children}
		</Dialog>
	);
});

export {
	DialogActionButton as AlertDialogActionButton,
	DialogCancelButton as AlertDialogCancelButton,
	DialogCloseButton as AlertDialogCloseButton,
	DialogDescription as AlertDialogDescription,
	DialogFooter as AlertDialogFooter,
	DialogHeader as AlertDialogHeader,
	DialogTitle as AlertDialogTitle,
	DialogTrigger as AlertDialogTrigger,
};
