import shared from "@acdh-oeaw/prettier-config";

/** @type {import("prettier").Config} */
const config = {
	...shared,
	overrides: [
		...shared.overrides,
		{
			files: "*.css",
			options: {
				printWidth: 120,
			},
		},
	],
};

export default config;
