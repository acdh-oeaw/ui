import optimizeLocales from "@react-aria/optimize-locales-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { locales } from "./src/config/i18n.config";

export default defineConfig({
	plugins: [
		{
			...optimizeLocales.vite({
				locales,
			}),
			enforce: "pre",
		},
		react(),
		tsconfigPaths(),
	],
});
