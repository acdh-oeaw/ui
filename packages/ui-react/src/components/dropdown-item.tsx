import { CheckIcon } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { composeRenderProps } from "react-aria-components";

import { Icon } from "@/src/primitives/icon";
import { ListBoxItem, type ListBoxItemProps } from "@/src/primitives/list-box-item";

interface DropdownItemProps<T extends object> extends ListBoxItemProps<T> {}

export function DropdownItem<T extends object>(props: Readonly<DropdownItemProps<T>>): ReactNode {
	const { children, ...rest } = props;

	return (
		<ListBoxItem {...rest} className="justify-between gap-x-6">
			{composeRenderProps(children, (children, renderProps) => {
				const { isSelected } = renderProps;

				return (
					<Fragment>
						{children}
						{isSelected ? (
							<Icon className="text-icon-brand">
								<CheckIcon />
							</Icon>
						) : null}
					</Fragment>
				);
			})}
		</ListBoxItem>
	);
}
