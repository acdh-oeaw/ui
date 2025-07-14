import { Loader2Icon } from "lucide-react";
import type { ReactNode } from "react";

import { Icon } from "@/src/primitives/icon";
import { Progress } from "@/src/primitives/progress";
import { useStylesContext } from "@/src/primitives/styles-context";

interface PendingIndicatorProps {}

export function PendingIndicator(props: Readonly<PendingIndicatorProps>): ReactNode {
	const { className, ...rest } = useStylesContext(props);

	return (
		<Progress isIndeterminate={true}>
			<Icon size="full">
				<Loader2Icon />
			</Icon>
		</Progress>
	);
}
