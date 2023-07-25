import type { StorybookConfig } from "@storybook/react-vite";

const excludedProps = new Set([
	"id",
	"slot",
	"onCopy",
	"onCut",
	"onPaste",
	"onCompositionStart",
	"onCompositionEnd",
	"onCompositionUpdate",
	"onSelect",
	"onBeforeInput",
	"onInput",
]);

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
		name: "@storybook/react-vite",
		options: {},
	},
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
	/** @see https://github.com/adobe/react-spectrum/blob/main/starters/tailwind/.storybook/main.js  */
	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
			propFilter: (prop) => {
				return !prop.name.startsWith("aria-") && !excludedProps.has(prop.name);
			},
		},
	},
};

export default config;
