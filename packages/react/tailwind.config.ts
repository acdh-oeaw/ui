import preset from "@acdh-oeaw/tailwindcss-preset";
import type { Config } from "tailwindcss";
import reactAriaComponentsPlugin from "tailwindcss-react-aria-components";

const config: Config = {
	content: ["./src/**/*.@(css|ts|tsx)"],
	plugins: [reactAriaComponentsPlugin],
	presets: [preset],
};

export default config;
