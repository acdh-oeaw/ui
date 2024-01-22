import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";
import {
	Dialog,
	DialogActionButton,
	DialogCancelButton,
	DialogCloseButton,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/dialog";
import { Modal, ModalOverlay } from "@/components/modal";

const meta: Meta<typeof Dialog> = {
	title: "Components/Dialog",
	component: Dialog,
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
			<DialogTrigger>
				<Button>Copy...</Button>
				<ModalOverlay>
					<Modal>
						<Dialog {...args}>
							<DialogCloseButton />
							<DialogHeader>
								<DialogTitle>Copy folder</DialogTitle>
								<DialogDescription>
									Are you sure you want to copy &quot;Documents&quot;?
								</DialogDescription>
							</DialogHeader>
							<DialogFooter>
								<DialogCancelButton>Cancel</DialogCancelButton>
								<DialogActionButton
									onPress={() => {
										alert("Clicked");
									}}
								>
									Copy
								</DialogActionButton>
							</DialogFooter>
						</Dialog>
					</Modal>
				</ModalOverlay>
			</DialogTrigger>
		);
	},
};
