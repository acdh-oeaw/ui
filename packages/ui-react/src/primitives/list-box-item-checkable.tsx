"use client";

import { cn } from "@acdh-oeaw/style-variants";
import { Fragment, type ReactNode } from "react";
import { composeRenderProps } from "react-aria-components";

import { ListBoxItem, type ListBoxItemProps } from "@/src/primitives/list-box-item";
import { ListBoxItemCheckIcon } from "@/src/primitives/list-box-item-check-icon";

export interface ListBoxItemCheckableProps<T extends object> extends ListBoxItemProps<T> {}

export function ListBoxItemCheckable<T extends object>(
	props: Readonly<ListBoxItemCheckableProps<T>>,
): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<ListBoxItem
			{...rest}
			className={cn(["col-span-full inline-grid grid-cols-subgrid gap-x-4"], className)}
		>
			{composeRenderProps(children, (children, renderProps) => {
				const { isSelected } = renderProps;

				return (
					<Fragment>
						{children}
						{isSelected ? (
							<ListBoxItemCheckIcon className="col-start-2 row-start-1" tone="brand" />
						) : null}
					</Fragment>
				);
			})}
		</ListBoxItem>
	);
}
