import type { Spec } from "axe-core";

/**
 * @see https://react-spectrum.adobe.com/react-aria/accessibility.html#testing
 */
export const config: Pick<Spec, "rules"> = {
	rules: [
		{
			id: "aria-hidden-focus",
			selector: '[aria-hidden="true"]:not([data-a11y-ignore="aria-hidden-focus"])',
		},
	],
};
