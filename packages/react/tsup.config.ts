import { defineConfig } from "tsup";

export default defineConfig({
	bundle: false,
	clean: true,
	dts: true,
	format: ["esm"],
	minify: false,
	outDir: "dist",
	sourcemap: true,
	treeshake: true,
});
