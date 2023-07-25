import "tailwindcss/tailwind.css";
import "@/styles/index.css";

import { type Preview } from "@storybook/vue3";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

const preview = {
	decorators: [
		withThemeByDataAttribute({
			attributeName: "data-color-scheme",
			themes: {
				light: "light",
				dark: "dark",
			},
			defaultTheme: "light",
		}),
	],
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		backgrounds: {
			disable: true,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
} satisfies Preview;

export default preview;
