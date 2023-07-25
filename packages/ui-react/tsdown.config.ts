import { defineConfig } from "tsdown";

export default defineConfig({
	clean: true,
	copy: ["./styles/"],
	dts: true,
	entry: [
		"./components/**/*.ts",
		"./components/**/*.tsx",
		"!./components/**/*.stories.ts",
		"!./components/**/*.stories.tsx",
		"!./components/**/*.test.ts",
		"!./components/**/*.test.tsx",
	],
	format: ["esm"],
	minify: false,
	sourcemap: true,
	treeshake: true,
	unbundle: true,
});
