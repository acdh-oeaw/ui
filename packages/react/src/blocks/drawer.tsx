import type { ReactNode } from "react";

import {
	Dialog as DialogContent,
	DialogCloseButton,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/dialog";
import { Modal, ModalOverlay, type ModalOverlayProps } from "@/components/modal";

interface DialogProps
	extends Omit<ModalOverlayProps, "isDismissable" | "isKeyboardDismissDisabled"> {
	children?: ReactNode;
	closeLabel: string;
	description: ReactNode;
	title: ReactNode;
}

export function Drawer(props: DialogProps): ReactNode {
	const { children, closeLabel, description, title, ...rest } = props;

	return (
		<ModalOverlay>
			<Modal
				{...rest}
				className="entering:duration-200 entering:ease-out entering:animate-in entering:slide-in-from-left exiting:duration-150 exiting:ease-in exiting:animate-out exiting:slide-out-to-left relative grid content-stretch items-stretch justify-start !p-0"
				isDismissable={true}
			>
				<DialogContent className="rounded-none">
					<DialogCloseButton aria-label={closeLabel} />
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription>{description}</DialogDescription>
					</DialogHeader>
					{children}
				</DialogContent>
			</Modal>
		</ModalOverlay>
	);
}

export { DialogTrigger as DrawerTrigger };
