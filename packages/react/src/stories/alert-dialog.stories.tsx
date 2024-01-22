import type { Meta, StoryObj } from "@storybook/react";

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
import { Button } from "@/components/button";
import { Modal, ModalOverlay } from "@/components/modal";

const meta: Meta<typeof AlertDialog> = {
	title: "Components/AlertDialog",
	component: AlertDialog,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {},
	render(args) {
		return (
			<AlertDialogTrigger>
				<Button variant="negative">Delete...</Button>
				<ModalOverlay>
					<Modal>
						<AlertDialog {...args}>
							<AlertDialogHeader>
								<AlertDialogTitle>Delete folder</AlertDialogTitle>
								<AlertDialogDescription>
									Are you sure you want to delete &quot;Documents&quot;? All contents will be
									permanently destroyed.
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancelButton>Cancel</AlertDialogCancelButton>
								<AlertDialogActionButton
									onPress={() => {
										alert("Clicked");
									}}
									variant="negative"
								>
									Delete
								</AlertDialogActionButton>
							</AlertDialogFooter>
						</AlertDialog>
					</Modal>
				</ModalOverlay>
			</AlertDialogTrigger>
		);
	},
};
