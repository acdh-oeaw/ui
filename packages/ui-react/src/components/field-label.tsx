"use client";

import type { ReactNode } from "react";

import { RequiredIcon } from "@/src/components/required-icon";
import { useFieldContext } from "@/src/primitives/field-context";
import { Label, type LabelProps } from "@/src/primitives/label";

export interface FieldLabelProps extends LabelProps {
	isRequired?: boolean;
}

export function FieldLabel(props: Readonly<FieldLabelProps>): ReactNode {
	const { children, ...rest } = props;

	const ctx = useFieldContext();

	const isRequired = props.isRequired === true || ctx.isRequired === true;

	return (
		<Label {...rest}>
			{children}
			{isRequired ? <RequiredIcon size="sm" /> : null}
		</Label>
	);
}
