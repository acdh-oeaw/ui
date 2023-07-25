import { resolve } from "node:path";

import baseConfig from "@acdh-oeaw/eslint-config";
import reactConfig from "@acdh-oeaw/eslint-config-react";
import storybookConfig from "@acdh-oeaw/eslint-config-storybook";
import tailwindcssConfig from "@acdh-oeaw/eslint-config-tailwindcss";
import gitignore from "eslint-config-flat-gitignore";
import turboConfig from "eslint-config-turbo/flat";
import { config } from "typescript-eslint";

export default config(
	gitignore({ strict: false }),
	turboConfig,
	baseConfig,
	reactConfig,
	tailwindcssConfig,
	{
		settings: {
			tailwindcss: {
				config: resolve("./styles/index.css"),
			},
		},
	},
	storybookConfig,
	{
		rules: {
			"arrow-body-style": ["error", "always"],
			"@typescript-eslint/explicit-module-boundary-types": "error",
			"@typescript-eslint/require-array-sort-compare": "error",
			"@typescript-eslint/strict-boolean-expressions": "error",
			"react/jsx-sort-props": ["error", { reservedFirst: true }],
			"react-x/prefer-read-only-props": "error",
		},
	},
);
