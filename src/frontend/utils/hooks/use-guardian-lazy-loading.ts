import { ReactNode, MutableRefObject, useEffect } from 'react'

export const useGuardianLazyLoading = (
	$guardian: MutableRefObject<null | HTMLElement | ReactNode>,
	allLoaded: boolean,
	action: Function
) => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries: Array<IntersectionObserverEntry>) => {
				entries.forEach((entry: IntersectionObserverEntry) => {
					if (entry.isIntersecting && $guardian.current) {
						console.log('visible')
						action()
					}
				})
			},
			{
				rootMargin: '0px',
				threshold: 1.0
			}
		)

		if ($guardian.current && !allLoaded) {
			console.log('observer')
			observer.observe($guardian.current as Element)
		}

		return () => {
			if ($guardian.current) {
				observer.unobserve($guardian.current as Element)
			}
		}
	}, [allLoaded])
}
