import type { ReactNode } from "react";

import {
	AlertDialog,
	AlertDialogActionButton,
	AlertDialogCancelButton,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/alert-dialog";
import { Modal, ModalOverlay } from "@/components/modal";

interface AlertDialogCompositeProps {
	actionLabel: ReactNode;
	cancelLabel: ReactNode;
	children: ReactNode;
	description: ReactNode;
	onAction: () => void;
	title: ReactNode;
	variant: "negative" | "primary";
}

function AlertDialogComposite(props: AlertDialogCompositeProps): ReactNode {
	const {
		actionLabel,
		cancelLabel = "Cancel",
		children,
		description,
		onAction,
		title,
		variant,
	} = props;

	return (
		<ModalOverlay>
			<Modal>
				<AlertDialog>
					<AlertDialogHeader>
						<AlertDialogTitle>{title}</AlertDialogTitle>
						<AlertDialogDescription>{description}</AlertDialogDescription>
					</AlertDialogHeader>
					{children}
					<AlertDialogFooter>
						<AlertDialogCancelButton>{cancelLabel}</AlertDialogCancelButton>
						<AlertDialogActionButton autoFocus onPress={onAction} variant={variant}>
							{actionLabel}
						</AlertDialogActionButton>
					</AlertDialogFooter>
				</AlertDialog>
			</Modal>
		</ModalOverlay>
	);
}

export {
	AlertDialogComposite as AlertDialog,
	type AlertDialogCompositeProps as AlertDialogProps,
	AlertDialogTrigger,
};
