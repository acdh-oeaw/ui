"use client";

import type { ReactNode } from "react";

import { useFieldContext } from "@/src/primitives/field-context";
import { FieldRequiredIndicator } from "@/src/primitives/field-required-indicator";
import { Label, type LabelProps } from "@/src/primitives/label";

export interface FieldLabelProps extends LabelProps {
	isRequired?: boolean;
}

export function FieldLabel(props: Readonly<FieldLabelProps>): ReactNode {
	const { children, isRequired, ...rest } = useFieldContext(props);

	return (
		<Label {...rest}>
			{children}
			{isRequired === true ? <FieldRequiredIndicator /> : null}
		</Label>
	);
}
