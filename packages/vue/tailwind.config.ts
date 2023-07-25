import { createPreset } from "@acdh-oeaw/tailwindcss-preset";
import { type Config } from "tailwindcss";

const preset = createPreset();

const config = {
	content: ["./src/**/*.@(css|ts|tsx|vue)"],
	presets: [preset],
} satisfies Config;

export default config;
