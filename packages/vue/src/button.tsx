import { Pressable as AriaPressable, type PressableProps as AriaPressableProps } from "@ark-ui/vue";
import { cva, type VariantProps } from "class-variance-authority";
import { defineComponent, type SlotsType, type VNodeChild } from "vue";

import { cn } from "@/lib/cn";

const styles = cva(
	"inline-flex shrink-0 items-center justify-center rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				primary: "bg-primary text-on-primary hover:bg-primary/90 data-[pressed]:bg-primary/90",
				secondary:
					"bg-secondary text-on-secondary hover:bg-secondary/80 data-[pressed]:bg-secondary/80",
				negative: "bg-negative text-on-negative hover:bg-negative/90 data-[pressed]:bg-negative/90",
				positive: "bg-positive text-on-positive hover:bg-positive/90 data-[pressed]:bg-positive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-on-accent data-[pressed]:bg-accent data-[pressed]:text-on-accent",
				ghost:
					"hover:bg-accent hover:text-on-accent data-[pressed]:bg-accent data-[pressed]:text-on-accent",
				link: "text-primary underline-offset-4 hover:underline data-[pressed]:underline",
			},
			size: {
				sm: "h-9 px-3",
				md: "h-10 px-4",
				lg: "h-11 px-8",
				icon: "s-10",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

type ButtonStyleProps = VariantProps<typeof styles>;

export interface ButtonProps extends AriaPressableProps {
	/** @default 'md'' */
	size?: ButtonStyleProps["size"];
	/** @default 'primary'' */
	variant?: ButtonStyleProps["variant"];
}

export const Button = defineComponent({
	name: "Button",
	emits: ["press"],
	props: ["size", "variant"],
	slots: Object as SlotsType<{
		default?: () => VNodeChild;
	}>,
	setup(props: ButtonProps, { attrs, emit, slots }) {
		return () => {
			return (
				<AriaPressable
					{...attrs}
					class={cn(
						styles({
							class: attrs["class"] as string | undefined,
							size: props.size,
							variant: props.variant,
						}),
					)}
					onPress={(event) => {
						emit("press", event);
					}}
				>
					{slots.default?.()}
				</AriaPressable>
			);
		};
	},
});
