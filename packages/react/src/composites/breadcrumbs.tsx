import type { ReactNode } from "react";

import {
	Breadcrumb,
	BreadcrumbLink,
	Breadcrumbs,
	BreadcrumbSeparator,
	type BreadcrumbsProps,
} from "@/components/breadcrumbs";
import type { WithId } from "@/types/collection";

interface BreadcrumbCompositeProps extends WithId<{ href?: string; label: ReactNode }> {}

function BreadcrumbComposite(props: BreadcrumbCompositeProps): ReactNode {
	const { href, id, label, ...rest } = props;

	return (
		<Breadcrumb key={id} {...rest} id={id}>
			<BreadcrumbLink href={href}>{label}</BreadcrumbLink>
			{href != null ? <BreadcrumbSeparator /> : null}
		</Breadcrumb>
	);
}

export {
	BreadcrumbComposite as Breadcrumb,
	type BreadcrumbCompositeProps as BreadcrumbProps,
	Breadcrumbs,
	type BreadcrumbsProps,
};
