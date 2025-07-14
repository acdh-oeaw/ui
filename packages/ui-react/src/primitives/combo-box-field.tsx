"use client";

import { type GetVariantProps, styles } from "@acdh-oeaw/style-variants";
import { useResizeObserver } from "@react-aria/utils";
import { type ReactNode, use, useCallback, useMemo, useRef, useState } from "react";
import {
	ComboBox as AriaComboBox,
	type ComboBoxProps as AriaComboBoxProps,
	composeRenderProps,
	GroupContext,
	PopoverContext,
} from "react-aria-components";

import { FieldContext } from "@/src/primitives/field-context";
import { StylesContext, useStylesContext } from "@/src/primitives/styles-context";

export const comboBoxFieldStyles = styles({
	base: ["flex flex-col gap-y-1"],
	variants: {
		size: {
			sm: [],
			md: [],
			lg: [],
		},
	},
	combinations: [],
	defaults: {
		size: "md",
	},
});

export type ComboBoxFieldStylesProps = GetVariantProps<typeof comboBoxFieldStyles>;

export interface ComboBoxFieldProps<T extends object>
	extends AriaComboBoxProps<T>,
		ComboBoxFieldStylesProps {}

export function ComboBoxField<T extends object>(props: Readonly<ComboBoxFieldProps<T>>): ReactNode {
	const { children, className, size, ...rest } = useStylesContext(props);

	const stylesProps = useMemo(() => {
		return { size };
	}, [size]);

	return (
		<AriaComboBox
			{...rest}
			className={composeRenderProps(className, (className) => {
				return comboBoxFieldStyles({ className, size });
			})}
		>
			{composeRenderProps(children, (children, renderProps) => {
				return (
					<StylesContext value={stylesProps}>
						<FieldContext value={renderProps}>
							<ComboBoxFieldContext>{children}</ComboBoxFieldContext>
						</FieldContext>
					</StylesContext>
				);
			})}
		</AriaComboBox>
	);
}

interface ComboBoxFieldContextProps {
	children: ReactNode;
}

function ComboBoxFieldContext(props: Readonly<ComboBoxFieldContextProps>): ReactNode {
	const { children } = props;

	const triggerRef = useRef<HTMLDivElement | null>(null);

	const [triggerWidth, setTriggerWidth] = useState<string | null>(null);

	const onResize = useCallback(() => {
		if (triggerRef.current) {
			const dimensions = triggerRef.current.getBoundingClientRect();
			setTriggerWidth(`${String(dimensions.right - dimensions.left)}px`);
		}
	}, [triggerRef]);

	useResizeObserver({
		ref: triggerRef,
		onResize,
	});

	const groupContextProps = use(GroupContext);

	const groupProps = useMemo(() => {
		return {
			...groupContextProps,
			ref: triggerRef,
		};
	}, [groupContextProps, triggerRef]);

	const popoverContextProps = use(PopoverContext);

	const popoverProps = useMemo(() => {
		return {
			...popoverContextProps,
			triggerRef,
			style: {
				"--trigger-width": triggerWidth,
			},
		} as typeof popoverContextProps;
	}, [popoverContextProps, triggerRef, triggerWidth]);

	return (
		<GroupContext value={groupProps}>
			<PopoverContext value={popoverProps}>{children}</PopoverContext>
		</GroupContext>
	);
}
