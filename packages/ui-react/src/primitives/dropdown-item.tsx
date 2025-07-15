"use client";

import { cn } from "@acdh-oeaw/style-variants";
import { Fragment, type ReactNode } from "react";
import { composeRenderProps } from "react-aria-components";

import { ListBoxItem, type ListBoxItemProps } from "@/src/primitives/list-box-item";
import { ListBoxItemCheckIcon } from "@/src/primitives/list-box-item-check-icon";

export interface DropdownItemProps<T extends object> extends ListBoxItemProps<T> {}

export function DropdownItem<T extends object>(props: Readonly<DropdownItemProps<T>>): ReactNode {
	const { children, className, ...rest } = props;

	return (
		<ListBoxItem
			{...rest}
			className={cn(["col-span-full inline-grid grid-cols-subgrid"], className)}
		>
			{composeRenderProps(children, (children, renderProps) => {
				const { isSelected } = renderProps;

				return (
					<Fragment>
						{children}
						{isSelected ? <ListBoxItemCheckIcon className="col-start-2 row-start-1" /> : null}
					</Fragment>
				);
			})}
		</ListBoxItem>
	);
}
