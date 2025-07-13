import "@/styles/index.css";
import "@/styles/storybook.css";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";
import { I18nProvider } from "react-aria-components";
import { themes } from "storybook/theming";

const preview: Preview = {
	decorators: [
		withThemeByDataAttribute({
			attributeName: "data-ui-color-scheme",
			defaultTheme: "light",
			themes: {
				light: "light",
				dark: "dark",
			},
		}),
		// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
		function WithProviders(Story) {
			return (
				<I18nProvider locale="en-GB">
					<Story />
				</I18nProvider>
			);
		},
	],
	parameters: {
		a11y: {
			config: {
				rules: [
					/**
					 * @see https://react-spectrum.adobe.com/react-aria/accessibility.html#testing
					 */
					{
						id: "aria-hidden-focus",
						selector: '[aria-hidden="true"]:not([data-a11y-ignore="aria-hidden-focus"])',
					},
				],
			},
			test: "error",
		},
		backgrounds: {
			disable: true,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			controls: {
				sort: "requiredFirst",
			},
			theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? themes.dark : themes.light,
		},
	},
};

export default preview;
