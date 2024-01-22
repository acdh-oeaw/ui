import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

import basePlugin from "./plugins/base";
import layoutPlugin from "./plugins/layout";
import tokensPlugin from "./plugins/tokens";

const config = {
	content: [],
	darkMode: ["selector", '[data-ui-color-scheme="dark"]'],
	plugins: [animatePlugin, basePlugin, layoutPlugin, tokensPlugin, typographyPlugin],
} satisfies Config;

export default config;
