import { type StorybookConfig } from "@storybook/vue3-vite";

const config = {
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-storysource",
		"@storybook/addon-styling",
	],
	docs: {
		autodocs: "tag",
	},
	framework: {
		name: "@storybook/vue3-vite",
		options: {},
	},
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
} satisfies StorybookConfig;

export default config;
