"use client";

import { XIcon } from "lucide-react";
import { createContext, type ElementRef, Fragment, useContext } from "react";
import {
	Button,
	composeRenderProps,
	Tag as AriaTag,
	TagGroup as AriaTagGroup,
	type TagGroupProps as AriaTagGroupProps,
	TagList as AriaTagList,
	type TagListProps as AriaTagListProps,
	type TagProps as AriaTagProps,
	Text as AriaText,
} from "react-aria-components";

import { FieldDescription } from "@/components/field-description";
import { Label } from "@/components/label";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { compose, type VariantProps, variants } from "@/lib/styles";
import { focusRing } from "@/styles/focus-ring";
import type { FieldProps } from "@/types/field";

const colors = {
	neutral: "bg-neutral-100 text-neutral-600 border-neutral-200 hover:border-neutral-300",
	green: "bg-green-100 text-green-700 border-green-200 hover:border-green-300",
	yellow: "bg-yellow-100 text-yellow-700 border-yellow-200 hover:border-yellow-300",
	blue: "bg-blue-100 text-blue-700 border-blue-200 hover:border-blue-300",
};

type Color = keyof typeof colors;
const ColorContext = createContext<Color>("neutral");

export const tagGroupStyles = variants({
	base: "flex flex-col gap-1",
});

export type TagGroupStyles = VariantProps<typeof tagGroupStyles>;

export interface TagGroupProps<T extends object>
	extends AriaTagGroupProps,
		Pick<AriaTagListProps<T>, "children" | "items" | "renderEmptyState">,
		FieldProps,
		TagGroupStyles {
	color?: Color;
}

export const TagGroup = forwardRef(function TagGroup<T extends object>(
	props: TagGroupProps<T>,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTagGroup>>,
) {
	const {
		children,
		className,
		color = "neutral",
		description,
		errorMessage,
		items,
		label,
		renderEmptyState,
		...rest
	} = props;

	return (
		<AriaTagGroup<T> ref={forwardedRef} {...rest} className={tagGroupStyles({ className })}>
			{label != null ? <Label>{label}</Label> : null}
			<ColorContext.Provider value={color}>
				<AriaTagList
					className="flex flex-wrap gap-1"
					items={items}
					renderEmptyState={renderEmptyState}
				>
					{children}
				</AriaTagList>
			</ColorContext.Provider>
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			{errorMessage != null ? (
				<AriaText className="text-sm text-red-600" slot="errorMessage">
					{errorMessage}
				</AriaText>
			) : null}
		</AriaTagGroup>
	);
});

export const tagStyles = compose(
	focusRing,
	variants({
		base: "flex max-w-fit cursor-default items-center gap-1 rounded-full border px-3 py-0.5 text-xs transition",
		variants: {
			color: {
				neutral: "",
				green: "",
				yellow: "",
				blue: "",
			},
			allowsRemoving: {
				true: "pr-1",
			},
			isSelected: {
				true: "border-transparent bg-blue-600 text-white forced-color-adjust-none forced-colors:bg-[Highlight] forced-colors:text-[HighlightText]",
			},
			isDisabled: {
				true: "bg-neutral-100 text-neutral-300 forced-colors:text-[GrayText]",
			},
		},
		compoundVariants: (Object.keys(colors) as Array<Color>).map((color) => {
			return {
				isSelected: false,
				color,
				class: colors[color],
			};
		}),
	}),
);

export type TagStyles = VariantProps<typeof tagStyles>;

const _tagRemoveButtonStyles = compose(
	focusRing,
	variants({
		base: "flex cursor-default items-center justify-center rounded-full p-0.5 transition-[background-color] hover:bg-black/10 pressed:bg-black/20",
	}),
);

export interface TagProps extends AriaTagProps, TagStyles {
	color?: Color;
}

export const Tag = forwardRef(function Tag(
	props: TagProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaTag>>,
) {
	const { children, className, color, ...rest } = props;

	const textValue = typeof children === "string" ? children : undefined;
	const groupColor = useContext(ColorContext);

	return (
		<AriaTag
			ref={forwardedRef}
			textValue={textValue}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return tagStyles({ ...renderProps, className, color: color ?? groupColor });
			})}
		>
			{({ allowsRemoving }) => {
				return (
					<Fragment>
						{children}
						{allowsRemoving ? (
							<Button slot="remove" className={_tagRemoveButtonStyles}>
								<XIcon aria-hidden={true} className="size-3 shrink-0" />
							</Button>
						) : null}
					</Fragment>
				);
			}}
		</AriaTag>
	);
});
