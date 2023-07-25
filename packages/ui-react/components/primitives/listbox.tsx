import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import type { ReactNode } from "react";
import {
	composeRenderProps,
	ListBox as AriaListBox,
	ListBoxItem as AriaListBoxItem,
	type ListBoxItemProps as AriaListBoxItemProps,
	type ListBoxProps as AriaListBoxProps,
} from "react-aria-components";

const listBoxStyles = styles({
	base: ["flex flex-col"],
	variants: {
		size: {
			sm: ["p-0.5"],
			md: ["p-1"],
			lg: ["p-1.5"],
		},
	},
	defaults: {
		size: "md",
	},
});

type ListBoxStylesProps = GetVariantProps<typeof listBoxStyles>;

interface ListBoxProps<T extends object> extends AriaListBoxProps<T>, ListBoxStylesProps {}

export function ListBox<T extends object>(props: Readonly<ListBoxProps<T>>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaListBox
			{...rest}
			className={composeRenderProps(className, (className) => {
				return listBoxStyles({ className, size });
			})}
		>
			{children}
		</AriaListBox>
	);
}

const listBoxItemStyles = styles({
	base: [
		"inline-flex whitespace-nowrap text-text-strong select-none",
		"hover:bg-fill-hover",
		"outline-stroke-focus focus-visible:outline-2 focus-visible:-outline-offset-2",
	],
	variants: {
		size: {
			sm: ["h-9 px-2 py-1.75 text-sm/5"],
			md: ["h-10 px-2 py-1.75 text-base/6"],
			lg: ["h-11 px-2 py-2.25 text-base/6"],
		},
	},
	defaults: {
		size: "md",
	},
});

type ListBoxItemStylesProps = GetVariantProps<typeof listBoxItemStyles>;

interface ListBoxItemProps<T extends object>
	extends AriaListBoxItemProps<T>,
		ListBoxItemStylesProps {}

export function ListBoxItem<T extends object>(props: Readonly<ListBoxItemProps<T>>): ReactNode {
	const { children, className, size, ...rest } = props;

	return (
		<AriaListBoxItem
			{...rest}
			className={composeRenderProps(className, (className) => {
				return listBoxItemStyles({ className, size });
			})}
		>
			{children}
		</AriaListBoxItem>
	);
}
