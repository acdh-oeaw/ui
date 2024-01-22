import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
		"@storybook/addon-a11y",
		"@storybook/addon-storysource",
		"@storybook/addon-themes",
	],
	docs: {
		autodocs: "tag",
	},
	framework: {
		name: "@storybook/vue3-vite",
		options: {
			docgen: "vue-component-meta",
		},
	},
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx|vue)"],
};

export default config;
