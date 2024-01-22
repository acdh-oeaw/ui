import { defineConfig } from "tsup";

export default defineConfig({
	bundle: false,
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
