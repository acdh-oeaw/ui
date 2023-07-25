"use client";

import { createContext } from "react";
import type { CheckboxRenderProps } from "react-aria-components";

/** @internal */
export interface CheckBoxState extends CheckboxRenderProps {}

/** @internal */
export const CheckBoxStateContext = createContext<CheckBoxState>({
	isDisabled: false,
	isHovered: false,
	isFocused: false,
	isFocusVisible: false,
	isIndeterminate: false,
	isInvalid: false,
	isPressed: false,
	isReadOnly: false,
	isRequired: false,
	isSelected: false,
});
