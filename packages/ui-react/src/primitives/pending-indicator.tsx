import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";

import type { IconProps } from "@/src/primitives/icon";
import { Progress, type ProgressProps } from "@/src/primitives/progress";
import { SpinnerIcon } from "@/src/primitives/spinner-icon";
import { useStylesContext } from "@/src/primitives/styles-context";

export const pendingIndicatorStyles = styles({
	base: ["inline-grid shrink-0 animate-in place-items-center delay-250 fill-mode-both fade-in"],
	variants: {
		size: {
			line: ["size-[1lh]"],
			sm: ["size-4"],
			md: ["size-6"],
			lg: ["size-8"],
			xl: ["size-12"],
			full: ["size-full"],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

type PendingIndicatorStylesProps = GetVariantProps<typeof pendingIndicatorStyles>;

export interface PendingIndicatorProps
	extends Omit<
			ProgressProps,
			| "children"
			| "formatOptions"
			| "isIndeterminate"
			| "label"
			| "maxValue"
			| "minValue"
			| "value"
			| "valueLabel"
			| "valueText"
		>,
		PendingIndicatorStylesProps,
		Pick<IconProps, "tone"> {}

export function PendingIndicator(props: Readonly<PendingIndicatorProps>): ReactNode {
	const { className, size, tone, ...rest } = useStylesContext(props);

	return (
		<Progress
			{...rest}
			className={pendingIndicatorStyles({ className, size })}
			isIndeterminate={true}
		>
			<SpinnerIcon size="full" tone={tone} />
		</Progress>
	);
}
