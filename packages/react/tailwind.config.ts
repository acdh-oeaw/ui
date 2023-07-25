import { createPreset } from "@acdh-oeaw/tailwindcss-preset";
import { type Config } from "tailwindcss";
import plugin from "tailwindcss-react-aria-components";

const preset = createPreset();

const config = {
	content: ["./src/**/*.@(css|ts|tsx)"],
	plugins: [plugin],
	presets: [preset],
} satisfies Config;

export default config;
