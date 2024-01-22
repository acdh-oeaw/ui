import preset from "@acdh-oeaw/tailwindcss-preset";
import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.@(css|ts|tsx)"],
	presets: [preset],
};

export default config;
