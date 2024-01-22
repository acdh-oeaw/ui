"use client";

import { GripVerticalIcon } from "lucide-react";
import { type ElementRef, Fragment } from "react";
import {
	Button,
	composeRenderProps,
	GridList as AriaGridList,
	GridListItem as AriaGridListItem,
	type GridListItemProps as AriaGridListItemProps,
	type GridListProps as AriaGridListProps,
} from "react-aria-components";

import { Checkbox } from "@/components/checkbox";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const gridListStyles = variants({
	base: "relative overflow-auto rounded-lg border",
});

export type GridListStyles = VariantProps<typeof gridListStyles>;

export interface GridListProps<T extends object> extends AriaGridListProps<T>, GridListStyles {}

export const GridList = forwardRef(function GridList<T extends object>(
	props: GridListProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaGridList>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaGridList<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return gridListStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaGridList>
	);
});

export const gridListItemStyles = compose(
	focusRing,
	variants({
		base: "relative -mb-px flex cursor-default select-none gap-3 border-y border-transparent px-3 py-2 text-sm text-neutral-900 -outline-offset-2 first:rounded-t-md first:border-t-0 last:mb-0 last:rounded-b-md last:border-b-0",
		variants: {
			isSelected: {
				false: "hover:bg-neutral-100",
				true: "z-20 border-y-blue-200 bg-blue-100 hover:bg-blue-200 ",
			},
			isDisabled: {
				true: "z-10 text-neutral-300 forced-colors:text-[GrayText]",
			},
		},
	}),
);

export type GridListItemStyles = VariantProps<typeof gridListItemStyles>;

export interface GridListItemProps extends AriaGridListItemProps, GridListItemStyles {}

export const GridListItem = forwardRef(function GridListItem(
	props: GridListItemProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaGridListItem>>,
) {
	const { children, className, ...rest } = props;

	const textValue = typeof children === "string" ? children : undefined;

	return (
		<AriaGridListItem
			ref={forwardedRef}
			textValue={textValue}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return gridListItemStyles({ ...renderProps, className });
			})}
		>
			{(renderProps) => {
				const { allowsDragging, selectionMode, selectionBehavior } = renderProps;

				return (
					<Fragment>
						{allowsDragging === true ? (
							<Button slot="drag">
								<GripVerticalIcon aria-hidden={true} className="size-4 shrink-0" />
							</Button>
						) : null}
						{selectionMode === "multiple" && selectionBehavior === "toggle" ? (
							<Checkbox slot="selection" />
						) : null}
						{children}
					</Fragment>
				);
			}}
		</AriaGridListItem>
	);
});
