/// <reference types="vitest/config" />

import { join } from "node:path";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import tailwindcssPlugin from "@tailwindcss/vite";
import reactPlugin from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsConfigPathsPlugin from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [reactPlugin(), tailwindcssPlugin(), tsConfigPathsPlugin()],
	test: {
		projects: [
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: join(import.meta.dirname, ".storybook"),
					}),
				],
				test: {
					name: "storybook",
					browser: {
						enabled: true,
						headless: true,
						instances: [{ browser: "chromium" }],
						provider: "playwright",
					},
					setupFiles: [join(import.meta.dirname, ".storybook/vitest.setup.ts")],
				},
			},
		],
	},
});
