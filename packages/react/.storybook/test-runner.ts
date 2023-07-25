import type { A11yParameters } from "@storybook/addon-a11y";
import { getStoryContext, type TestRunnerConfig } from "@storybook/test-runner";
import { checkA11y, configureAxe, injectAxe } from "axe-playwright";

import { config as axeConfig } from "@/config/axe.config";

/*
 * @see https://storybook.js.org/docs/writing-tests/test-runner
 * @see https://storybook.js.org/docs/writing-tests/accessibility-testing#automate-accessibility-tests-with-test-runner
 */
const config: TestRunnerConfig = {
	async preVisit(page) {
		await injectAxe(page);
	},
	async postVisit(page, context) {
		const storyContext = await getStoryContext(page, context);
		const a11yParams = storyContext.parameters["a11y"] as
			| (A11yParameters & { disable: boolean })
			| undefined;

		if (a11yParams?.disable === true) return;

		await configureAxe(page, {
			rules: [...(axeConfig.rules ?? []), ...(a11yParams?.config?.rules ?? [])],
		});

		await checkA11y(page, "#storybook-root", {
			axeOptions: a11yParams?.options,
			detailedReport: true,
			detailedReportOptions: {
				html: true,
			},
		});
	},
};

export default config;
