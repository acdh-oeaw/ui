import "@/styles/stories.css";
import "tailwindcss/tailwind.css";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { themes } from "@storybook/theming";
import { type Preview, setup, type VueRenderer } from "@storybook/vue3";
import { createI18n } from "vue-i18n";

import { defaultLocale, type Locale, locales, type Translations } from "@/config/i18n.config";
import de from "@/messages/de.json";
import en from "@/messages/en.json";

const localeLabel = new Intl.DisplayNames(defaultLocale, { type: "language" });

const translations: Translations = { de, en };

setup((app, context) => {
	const locale = context?.globals["locale"] as Locale;

	const messages = translations[locale];
	const i18n = createI18n({ messages });

	app.use(i18n);
});

const preview: Preview = {
	decorators: [
		withThemeByDataAttribute<VueRenderer>({
			attributeName: "data-ui-color-scheme",
			defaultTheme: "light",
			themes: {
				dark: "dark",
				light: "light",
			},
		}),
	],
	globalTypes: {
		locale: {
			name: "Locale",
			description: "Locale",
			defaultValue: defaultLocale,
			toolbar: {
				title: "Locale",
				icon: "globe",
				items: locales.map((locale) => {
					return { value: locale, title: localeLabel.of(locale) };
				}),
				dynamicTitle: true,
			},
		},
	},
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
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
			theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? themes.dark : themes.light,
		},
	},
};

export default preview;
