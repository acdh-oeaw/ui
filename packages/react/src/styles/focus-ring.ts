import { variants } from "@/lib/styles";

export const focusRing = variants({
	base: "outline outline-offset-2 outline-focus-indicator forced-colors:outline-[Highlight]",
	variants: {
		isFocusVisible: {
			false: "outline-0",
			true: "outline-2",
		},
	},
});
