import type { ReactNode } from "react";

import {
	Dialog,
	DialogActionButton,
	DialogCancelButton,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/dialog";
import { Modal, ModalOverlay } from "@/components/modal";

interface DialogCompositeProps {
	actionLabel: ReactNode;
	cancelLabel: ReactNode;
	children: ReactNode;
	description: ReactNode;
	isDismissable?: boolean;
	onAction: () => void;
	title: ReactNode;
	variant: "primary";
}

function DialogComposite(props: DialogCompositeProps): ReactNode {
	const {
		actionLabel,
		cancelLabel = "Cancel",
		children,
		description,
		isDismissable,
		onAction,
		title,
		variant,
	} = props;

	return (
		<ModalOverlay>
			<Modal isDismissable={isDismissable}>
				<Dialog>
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					{children}
					<DialogFooter>
						<DialogCancelButton>{cancelLabel}</DialogCancelButton>
						<DialogActionButton autoFocus onPress={onAction} variant={variant}>
							{actionLabel}
						</DialogActionButton>
					</DialogFooter>
				</Dialog>
			</Modal>
		</ModalOverlay>
	);
}

export { DialogComposite as Dialog, type DialogCompositeProps as DialogProps, DialogTrigger };
