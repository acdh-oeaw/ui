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
				<Button>Open dialog</Button>
				<ModalOverlay>
					<Modal>
						<Dialog {...args}>
							<DialogCloseButton aria-label="Close" />
							<DialogHeader>
								<DialogTitle>Ice cream</DialogTitle>
								<DialogDescription>Please select your favourite flavor.</DialogDescription>
							</DialogHeader>
							<DialogFooter>
								<DialogCancelButton>Cancel</DialogCancelButton>
								<DialogActionButton>Thanks</DialogActionButton>
							</DialogFooter>
						</Dialog>
					</Modal>
				</ModalOverlay>
			</DialogTrigger>
		);
	},
};

export const Dismissable: Story = {
	args: {},
	render(args) {
		return (
			<DialogTrigger>
				<Button>Open dialog</Button>
				<ModalOverlay>
					<Modal isDismissable={true}>
						<Dialog {...args}>
							<DialogCloseButton aria-label="Close" />
							<DialogHeader>
								<DialogTitle>Ice cream</DialogTitle>
								<DialogDescription>Please select your favourite flavor.</DialogDescription>
							</DialogHeader>
							<DialogFooter>
								<DialogCancelButton>Cancel</DialogCancelButton>
								<DialogActionButton>Thanks</DialogActionButton>
							</DialogFooter>
						</Dialog>
					</Modal>
				</ModalOverlay>
			</DialogTrigger>
		);
	},
};

export const Drawer: Story = {
	args: {},
	render(args) {
		return (
			<DialogTrigger>
				<Button>Open dialog</Button>
				<ModalOverlay>
					<Modal className="relative grid items-stretch justify-start !p-0 entering:duration-200 entering:ease-out entering:animate-in entering:slide-in-from-left         exiting:duration-150 exiting:ease-in exiting:animate-out exiting:slide-out-to-left">
						<Dialog {...args} className="rounded-none">
							<DialogCloseButton aria-label="Close" />
							<DialogHeader>
								<DialogTitle>Ice cream</DialogTitle>
								<DialogDescription>Please select your favourite flavor.</DialogDescription>
							</DialogHeader>
							<DialogFooter>
								<DialogCancelButton>Cancel</DialogCancelButton>
								<DialogActionButton>Thanks</DialogActionButton>
							</DialogFooter>
						</Dialog>
					</Modal>
				</ModalOverlay>
			</DialogTrigger>
		);
	},
};
