import React, { lazy, Suspense } from "react";
import LoadingProgress from "@/components/loadingProgress";

export function lazyLoad(
	factory: () => Promise<{
		default: React.ComponentType<any>;
	}>
) {
	const LazyComponent = lazy(factory);
	return (
		<Suspense fallback={<LoadingProgress />}>
			<LazyComponent />
		</Suspense>
	);
}
