import type { ReactNode } from "react";
import {
	Collection as AriaCollection,
	type ListBoxSectionProps as AriaListBoxSectionProps,
} from "react-aria-components";

export interface ListBoxSectionItemsProps<T extends object>
	extends Pick<AriaListBoxSectionProps<T>, "children" | "items"> {}

export function ListBoxSectionItems<T extends object>(
	props: Readonly<ListBoxSectionItemsProps<T>>,
): ReactNode {
	const { children, ...rest } = props;

	return <AriaCollection {...rest}>{children}</AriaCollection>;
}
