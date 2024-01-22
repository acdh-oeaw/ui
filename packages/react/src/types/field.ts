import type { ValidationResult as AriaValidationResult } from "react-aria-components";

export interface FieldProps {
	label?: string;
	description?: string;
	errorMessage?: string | ((validation: AriaValidationResult) => string);
}

// FIXME: should accept ReactNode, not only string
