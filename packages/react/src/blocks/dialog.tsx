import type { ReactNode } from "react";

import {
	Dialog as DialogContent,
	DialogActionButton,
	DialogCancelButton,
	DialogCloseButton,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/dialog";
import { Modal, ModalOverlay, type ModalOverlayProps } from "@/components/modal";

interface DialogProps extends ModalOverlayProps {
	actionLabel: ReactNode;
	cancelLabel: ReactNode;
	closeLabel: string;
	children?: ReactNode;
	description: ReactNode;
	/** @default 3 */
	headingLevel?: 1 | 2 | 3 | 4;
	onAction: () => void;
	title: ReactNode;
}

export function Dialog(props: DialogProps): ReactNode {
	const {
		actionLabel,
		cancelLabel,
		closeLabel,
		children,
		description,
		headingLevel,
		isDismissable = true,
		onAction,
		title,
		...rest
	} = props;

	return (
		<ModalOverlay>
			<Modal {...rest} isDismissable={isDismissable}>
				<DialogContent>
					{isDismissable ? <DialogCloseButton aria-label={closeLabel} /> : null}
					<DialogHeader>
						<DialogTitle level={headingLevel}>{title}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					{children}
					<DialogFooter>
						<DialogCancelButton>{cancelLabel}</DialogCancelButton>
						<DialogActionButton onPress={onAction}>{actionLabel}</DialogActionButton>
					</DialogFooter>
				</DialogContent>
			</Modal>
		</ModalOverlay>
	);
}

export { DialogTrigger };
