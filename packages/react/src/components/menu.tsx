"use client";

import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { type ElementRef, Fragment } from "react";
import {
	composeRenderProps,
	Menu as AriaMenu,
	MenuItem as AriaMenuItem,
	type MenuItemProps as AriaMenuItemProps,
	type MenuProps as AriaMenuProps,
	MenuTrigger as AriaMenuTrigger,
	Separator as AriaMenuSeparator,
	type SeparatorProps as AriaMenuSeparatorProps,
	SubmenuTrigger as AriaSubMenuTrigger,
} from "react-aria-components";

import {
	dropdownItemStyles,
	DropdownSection,
	type DropdownSectionProps,
} from "@/components/dropdown";
import { Popover, type PopoverProps } from "@/components/popover";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";

export const menuStyles = variants({
	base: "max-h-[inherit] overflow-auto p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]",
});

export type MenuStyles = VariantProps<typeof menuStyles>;

export interface MenuProps<T extends object> extends AriaMenuProps<T>, MenuStyles {
	placement?: PopoverProps["placement"];
}

export const Menu = forwardRef(function Menu<T extends object>(
	props: MenuProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaMenu>>,
) {
	const { children, className, placement, ...rest } = props;

	return (
		<Popover className="min-w-[150px]" placement={placement}>
			<AriaMenu<T> ref={forwardedRef} {...rest} className={menuStyles({ className })}>
				{children}
			</AriaMenu>
		</Popover>
	);
});

export const menuItemStyles = dropdownItemStyles;

export type MenuItemStyles = VariantProps<typeof menuItemStyles>;

export interface MenuItemProps extends AriaMenuItemProps, MenuItemStyles {}

export const MenuItem = forwardRef(function MenuItem(
	props: MenuItemProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaMenuItem>>,
) {
	const { children, className, ...rest } = props;

	return (
		<AriaMenuItem
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return menuItemStyles({ ...renderProps, className });
			})}
		>
			{composeRenderProps(props.children, (children, renderProps) => {
				const { hasSubmenu, isSelected, selectionMode } = renderProps;

				return (
					<Fragment>
						{selectionMode !== "none" && (
							<span className="flex w-4 items-center">
								{isSelected ? <CheckIcon aria-hidden={true} className="size-4 shrink-0" /> : null}
							</span>
						)}
						<span className="flex flex-1 items-center gap-2 truncate font-normal group-selected:font-semibold">
							{children}
						</span>
						{hasSubmenu ? (
							<ChevronRightIcon aria-hidden={true} className="absolute right-2 size-4 shrink-0" />
						) : null}
					</Fragment>
				);
			})}
		</AriaMenuItem>
	);
});

export const menuSeparatorStyles = variants({
	base: "mx-3 my-1 border-b border-neutral-300",
});

export type MenuSeparatorStyles = VariantProps<typeof menuSeparatorStyles>;

export interface MenuSeparatorProps extends AriaMenuSeparatorProps, MenuSeparatorStyles {}

export const MenuSeparator = forwardRef(function MenuSeparator(
	props: MenuSeparatorProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaMenuSeparator>>,
) {
	const { className, ...rest } = props;

	return (
		<AriaMenuSeparator
			ref={forwardedRef}
			{...rest}
			className={menuSeparatorStyles({ className })}
		/>
	);
});

export interface MenuSectionProps<T extends object> extends DropdownSectionProps<T> {}

export const MenuSection = DropdownSection;

export { AriaMenuTrigger as MenuTrigger, AriaSubMenuTrigger as SubMenuTrigger };
