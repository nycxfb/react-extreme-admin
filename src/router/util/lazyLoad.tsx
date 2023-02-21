import React, { lazy, Suspense } from "react";
import LoadingProgress from "@/components/loadingProgress";
import { KeepAlive } from "react-activation";

export function lazyLoad(
	factory: () => Promise<{
		default: React.ComponentType<any>;
	}>
) {
	const LazyComponent = lazy(factory);
	return (
		// <KeepAlive>
		<Suspense fallback={<LoadingProgress />}>
			<LazyComponent />
		</Suspense>
		// </KeepAlive>
	);
}
