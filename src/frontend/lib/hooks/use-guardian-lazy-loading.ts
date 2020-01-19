import { ReactNode, MutableRefObject, useEffect } from 'react'

export const useGuardianLazyLoading = (
	$guardian: MutableRefObject<null | HTMLElement | ReactNode>,
	allLoaded: boolean,
	action: Function,
	forceCheck?: number
) => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries: Array<IntersectionObserverEntry>) => {
				entries.forEach((entry: IntersectionObserverEntry) => {
					if (entry.isIntersecting && $guardian.current) {
						action()
					}
				})
			},
			{
				rootMargin: '0px',
				threshold: 0.1
			}
		)

		if ($guardian.current && !allLoaded) {
			observer.observe($guardian.current as Element)
		}

		return () => {
			if ($guardian.current) {
				observer.unobserve($guardian.current as Element)
			}
		}
	}, [allLoaded, forceCheck])
}
