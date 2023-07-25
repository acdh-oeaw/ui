import { cva, type VariantProps } from "class-variance-authority";
import { defineComponent, type SlotsType, type VNodeChild } from "vue";

import { cn } from "@/lib/cn";

const styles = cva(
	"inline-flex shrink-0 select-none items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors",
	{
		variants: {
			variant: {
				primary: "border-transparent bg-primary text-on-primary",
				secondary: "border-transparent bg-secondary text-on-secondary",
				negative: "border-transparent bg-negative text-on-negative",
				positive: "border-transparent bg-positive text-on-positive",
				outline: "text-on-background",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	},
);

type BadgeStyleProps = VariantProps<typeof styles>;

export interface BadgeProps {
	/** @default 'primary'' */
	variant?: BadgeStyleProps["variant"];
}

export const Badge = defineComponent({
	name: "Badge",
	props: ["variant"],
	slots: Object as SlotsType<{
		default?: () => VNodeChild;
	}>,
	setup(props: BadgeProps, { attrs, slots }) {
		return () => {
			return (
				<span
					{...attrs}
					class={cn(
						styles({
							class: attrs["class"] as string | undefined,
							variant: props.variant,
						}),
					)}
				>
					{slots.default?.()}
				</span>
			);
		};
	},
});
