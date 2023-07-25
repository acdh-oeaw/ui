import type { Config } from "tailwindcss";
import createPlugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";
import reactAriaComponentsPlugin from "tailwindcss-react-aria-components";

const shadcnPlugin = createPlugin(
	({ addBase, theme }) => {
		addBase({
			":root": {
				"--background": "0 0% 100%",
				"--foreground": "0 0% 3.9%",

				"--card": "0 0% 100%",
				"--card-foreground": "0 0% 3.9%",

				"--popover": "0 0% 100%",
				"--popover-foreground": "0 0% 3.9%",

				"--primary": "0 0% 9%",
				"--primary-foreground": "0 0% 98%",

				"--secondary": "0 0% 96.1%",
				"--secondary-foreground": "0 0% 9%",

				"--muted": "0 0% 96.1%",
				"--muted-foreground": "0 0% 45.1%",

				"--accent": "0 0% 96.1%",
				"--accent-foreground": "0 0% 9%",

				"--negative": "0 84.2% 60.2%",
				"--negative-foreground": "0 0% 98%",

				"--border": "0 0% 89.8%",
				"--input": "0 0% 89.8%",
				"--focus-indicator": "0 0% 3.9%",

				"--radius": "0.5rem",
			},
			':root[data-ui-color-scheme="dark"]': {
				"--background": "0 0% 3.9%",
				"--foreground": "0 0% 98%",

				"--card": "0 0% 3.9%",
				"--card-foreground": "0 0% 98%",

				"--popover": "0 0% 3.9%",
				"--popover-foreground": "0 0% 98%",

				"--primary": "0 0% 98%",
				"--primary-foreground": "0 0% 9%",

				"--secondary": "0 0% 14.9%",
				"--secondary-foreground": "0 0% 98%",

				"--muted": "0 0% 14.9%",
				"--muted-foreground": "0 0% 63.9%",

				"--accent": "0 0% 14.9%",
				"--accent-foreground": "0 0% 98%",

				"--negative": "0 62.8% 30.6%",
				"--negative-foreground": "0 0% 98%",

				"--border": "0 0% 14.9%",
				"--input": "0 0% 14.9%",
				"--focus-indicator": "0 0% 83.1%",
			},
			"*": {
				borderColor: theme("colors.border"),
			},
			body: {
				backgroundColor: theme("colors.background"),
				color: theme("colors.foreground"),
				fontFamily: theme("fontFamily.body"),
			},
		});
	},
	{
		theme: {
			extend: {
				colors: {
					border: "hsl(var(--border))",
					input: "hsl(var(--input))",
					"focus-indicator": "hsl(var(--focus-indicator))",
					background: "hsl(var(--background))",
					foreground: "hsl(var(--foreground))",
					primary: {
						DEFAULT: "hsl(var(--primary))",
						foreground: "hsl(var(--primary-foreground))",
					},
					secondary: {
						DEFAULT: "hsl(var(--secondary))",
						foreground: "hsl(var(--secondary-foreground))",
					},
					negative: {
						DEFAULT: "hsl(var(--negative))",
						foreground: "hsl(var(--negative-foreground))",
					},
					muted: {
						DEFAULT: "hsl(var(--muted))",
						foreground: "hsl(var(--muted-foreground))",
					},
					accent: {
						DEFAULT: "hsl(var(--accent))",
						foreground: "hsl(var(--accent-foreground))",
					},
					popover: {
						DEFAULT: "hsl(var(--popover))",
						foreground: "hsl(var(--popover-foreground))",
					},
					card: {
						DEFAULT: "hsl(var(--card))",
						foreground: "hsl(var(--card-foreground))",
					},
				},
				borderRadius: {
					lg: "var(--radius)",
					md: "calc(var(--radius) - 2px)",
					sm: "calc(var(--radius) - 4px)",
				},
			},
		},
	},
);

const config = {
	content: ["./src/**/*.@(css|ts|tsx)"],
	darkMode: ["selector", '[data-ui-color-scheme="dark"]'],
	plugins: [animatePlugin, reactAriaComponentsPlugin, shadcnPlugin],
	theme: {
		extend: {
			fontFamily: {
				body: ["var(--font-body, ui-sans-serif)", "system-ui", "sans-serif"],
				heading: ["var(--font-heading, var(--font-body))"],
			},
		},
	},
} satisfies Config;

export default config;
