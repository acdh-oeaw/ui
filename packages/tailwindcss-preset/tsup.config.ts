import { defineConfig } from "tsup";

export default defineConfig({
	bundle: true,
	clean: true,
	dts: true,
	esbuildOptions(options) {
		options.packages = "external";
	},
	format: ["esm"],
	minify: false,
	outDir: "dist",
	sourcemap: true,
	treeshake: true,
});
