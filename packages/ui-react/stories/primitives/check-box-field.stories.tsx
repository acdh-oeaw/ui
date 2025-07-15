import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fragment } from "react/jsx-runtime";

import { CheckBox } from "@/src/primitives/check-box";
import { CheckBoxField } from "@/src/primitives/check-box-field";

const meta = {
	title: "Primitives/CheckBoxField",
	component: CheckBoxField,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {},
	args: {},
} satisfies Meta<typeof CheckBoxField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children() {
			return (
				<Fragment>
					<CheckBox />
					Fruits
				</Fragment>
			);
		},
	},
};
