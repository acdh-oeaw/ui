import type { ElementRef } from "react";
import { Dialog as AriaDialog, type DialogProps as AriaDialogProps } from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const dialogStyles = variants({
	base: "relative max-h-[inherit] overflow-auto p-6 outline outline-0 [[data-placement]>&]:p-4",
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
