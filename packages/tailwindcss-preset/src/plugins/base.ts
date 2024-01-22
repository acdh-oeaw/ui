import createPlugin from "tailwindcss/plugin";

export default createPlugin(
	({ addBase }) => {
		addBase({
			"*, *::before, *::after": {
				boxSizing: "border-box",
				margin: "0",
				padding: "0",
			},

			":root": {
				blockSize: "100%",
				fontFamily: "var(--font-family-body)",
				fontSize: "var(--font-size-md)",
				fontSynthesis: "none",
				lineHeight: "var(--line-height-md)",
				overflow: "hidden",
				overflowWrap: "break-word",
				scrollbarGutter: "stable",
				textRendering: "optimizeLegibility",
				textSizeAdjust: "none",
				WebkitTapHighlightColor: "transparent",
			},

			'[data-ui-color-scheme="light"]': {
				backgroundColor: "var(--color-neutral-0)",
				color: "var(--color-neutral-600)",
				colorScheme: "light",
			},

			'[data-ui-color-scheme="dark"]': {
				backgroundColor: "var(--color-neutral-900)",
				color: "var(--color-neutral-400)",
				colorScheme: "dark",
			},

			":focus": {
				outline: "none",
			},

			":focus-visible": {
				/**
				 * `outline-style: auto` uses user-agent outlines, and does not respect
				 * `outline-color` or `outline-width`.
				 */
				outline: "auto",
				outlineOffset: "0",
			},

			'[data-ui-color-scheme="light"] :focus-visible': {
				outline: "2px solid var(--color-neutral-950)",
			},

			'[data-ui-color-scheme="dark"] :focus-visible': {
				outline: "2px solid var(--color-neutral-0)",
			},

			a: {
				textUnderlineOffset: "0.15em",
			},

			blockquote: {
				textBalance: "pretty",
			},

			body: {
				blockSize: "100%",
				overflowY: "auto",
			},

			"h1, h2, h3, h4, h5": {
				fontFamily: "var(--font-family-heading)",
				textBalance: "balance",
			},

			iframe: {
				border: "0",
			},

			p: {
				textBalance: "pretty",
			},

			table: {
				fontVariantNumeric: "tabular-nums",
			},

			textarea: {
				fieldSizing: "content",
				minBlockSize: "3lh",
			},

			"[hidden]": {
				display: "none !important",
			},

			"[id]": {
				scrollMarginBlockStart: "2ex",
			},

			"@media (prefers-reduced-motion: reduce)": {
				"*, *::before, *::after": {
					transitionDuration: "0.01ms !important",
					animationDuration: "0.01ms !important",
					animationIterationCount: "1 !important",
					scrollBehavior: "auto !important",
				},
			},

			/**
			 * Scale up hit targets on high resolution mobile devices.
			 */
			"@media (resolution >= 200dpi)": {
				":root": {
					fontSize: "18px",
				},
			},
		});
	},
	{
		theme: {
			extend: {
				typography: {
					DEFAULT: {
						css: {
							/** Don't add quotes around `blockquote`. */
							"blockquote p:first-of-type::before": null,
							"blockquote p:last-of-type::after": null,

							/** Don't add backticks around inline `code`. */
							"code::before": null,
							"code::after": null,
						},
					},
				},
			},
		},
	},
);
