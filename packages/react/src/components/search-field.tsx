import { SearchIcon, XIcon } from "lucide-react";
import type { ElementRef } from "react";
import {
	composeRenderProps,
	SearchField as AriaSearchField,
	type SearchFieldProps as AriaSearchFieldProps,
} from "react-aria-components";

import { Button } from "@/components/button";
import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { FieldGroup } from "@/components/field-group";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { type ForwardedRef, forwardRef } from "@/lib/forward-ref";
import { type VariantProps, variants } from "@/lib/styles";
import type { FieldProps } from "@/types/field";

export const searchFieldStyles = variants({
	base: "group flex min-w-[40px] flex-col gap-1",
});

export type SearchFieldStyles = VariantProps<typeof searchFieldStyles>;

export interface SearchFieldProps
	extends Omit<AriaSearchFieldProps, "children">,
		FieldProps,
		SearchFieldStyles {}

export const SearchField = forwardRef(function SearchField(
	props: SearchFieldProps,
	forwardedRef: ForwardedRef<ElementRef<typeof AriaSearchField>>,
) {
	const { className, description, errorMessage, label, ...rest } = props;

	return (
		<AriaSearchField
			ref={forwardedRef}
			{...rest}
			className={composeRenderProps(className, (className, renderProps) => {
				return searchFieldStyles({ ...renderProps, className });
			})}
		>
			{label != null ? <Label>{label}</Label> : null}
			<FieldGroup>
				<SearchIcon
					aria-hidden={true}
					className="ml-2 size-4 shrink-0 text-neutral-500 group-disabled:text-neutral-200 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
				/>
				<Input className="[&::-webkit-search-cancel-button]:hidden" />
				<Button className="mr-1 w-6 group-empty:invisible" variant="icon">
					<XIcon aria-hidden={true} className="size-4 shrink-0" />
				</Button>
			</FieldGroup>
			{description != null ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError>{errorMessage}</FieldError>
		</AriaSearchField>
	);
});
