import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	addons: [
		"@storybook/addon-onboarding",
		"@chromatic-com/storybook",
		"@storybook/addon-docs",
		"@storybook/addon-a11y",
		"@storybook/addon-themes",
		"@storybook/addon-vitest",
	],
	core: {
		disableWhatsNewNotifications: true,
	},
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	staticDirs: ["../public/"],
	stories: ["../stories/**/*.mdx", "../stories/**/*.stories.tsx"],
	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			propFilter: (prop) => {
				return !prop.name.startsWith("aria-");
			},
			shouldExtractLiteralValuesFromEnum: true,
		},
	},
};

export default config;
