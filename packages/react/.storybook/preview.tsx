import "tailwindcss/tailwind.css";
import "@/styles/index.css";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react";
import { themes } from "@storybook/theming";
import type { DecoratorFunction } from "@storybook/types";
import { IntlProvider } from "use-intl";

import { config as axeConfig } from "@/config/axe.config";
import { defaultLocale, type Locale, locales, type Translations } from "@/config/i18n.config";
import de from "@/messages/de.json";
import en from "@/messages/en.json";

const localeLabel = new Intl.DisplayNames(defaultLocale, { type: "language" });

const translations: Translations = { de, en };

const withI18n: DecoratorFunction<ReactRenderer> = function withI18n(Story, context) {
	const locale = context.globals["locale"] as Locale;

	const messages = translations[locale];

	return (
		<IntlProvider locale={locale} messages={messages}>
			<Story {...context} />
		</IntlProvider>
	);
};

const preview: Preview = {
	decorators: [
		withI18n,
		withThemeByDataAttribute<ReactRenderer>({
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
		a11y: {
			config: axeConfig,
		},
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
