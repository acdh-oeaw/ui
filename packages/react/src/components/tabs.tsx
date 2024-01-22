"use client";

import type { ElementRef } from "react";
import {
	composeRenderProps,
	Tab as AriaTab,
	TabList as AriaTabList,
	type TabListProps as AriaTabListProps,
	TabPanel as AriaTabPanel,
	type TabPanelProps as AriaTabPanelProps,
	type TabProps as AriaTabProps,
	Tabs as AriaTabs,
	type TabsProps as AriaTabsProps,
} from "react-aria-components";

import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";

export const tabsStyles = variants({
	base: "flex gap-4",
	variants: {
		orientation: {
			horizontal: "flex-col",
			vertical: "w-[800px] flex-row",
		},
	},
});

export type TabsStyles = VariantProps<typeof tabsStyles>;

export interface TabsProps extends AriaTabsProps, TabsStyles {}

export const Tabs = forwardRef(function Tabs(
	props: TabsProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTabs>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaTabs
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return tabsStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaTabs>
	);
});

export const tabListStyles = variants({
	base: "flex gap-1",
	variants: {
		orientation: {
			horizontal: "flex-row",
			vertical: "flex-col items-start",
		},
	},
});

export type TabListStyles = VariantProps<typeof tabListStyles>;

export interface TabListProps<T extends object> extends AriaTabListProps<T>, TabListStyles {}

export const TabList = forwardRef(function TabList<T extends object>(
	props: TabListProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTabList>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaTabList<T>
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return tabListStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaTabList>
	);
});

export const tabStyles = compose(
	focusRing,
	variants({
		base: "flex cursor-default items-center rounded-full px-4 py-1.5 text-sm font-medium transition forced-color-adjust-none",
		variants: {
			isSelected: {
				false:
					"text-neutral-600 hover:bg-neutral-200 hover:text-neutral-700 pressed:bg-neutral-200 pressed:text-neutral-700",
				true: "bg-neutral-800 text-white forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
			},
			isDisabled: {
				true: "text-neutral-200 selected:bg-neutral-200 selected:text-neutral-300 forced-colors:text-[GrayText] forced-colors:selected:bg-[GrayText] forced-colors:selected:text-[HighlightText]",
			},
		},
	}),
);

export type TabStyles = VariantProps<typeof tabStyles>;

export interface TabProps extends AriaTabProps, TabStyles {}

export const Tab = forwardRef(function Tab(
	props: TabProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTab>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaTab
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return tabStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaTab>
	);
});

export const tabPanelStyles = compose(
	focusRing,
	variants({
		base: "flex-1 p-4 text-sm text-neutral-900",
	}),
);

export type TabPanelStyles = VariantProps<typeof tabPanelStyles>;

export interface TabPanelProps extends AriaTabPanelProps, TabPanelStyles {}

export const TabPanel = forwardRef(function TabPanel(
	props: TabPanelProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTabPanel>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaTabPanel
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return tabPanelStyles({ ...renderProps, className });
			})}
		>
			{children}
		</AriaTabPanel>
	);
});
