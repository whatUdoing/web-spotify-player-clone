import {
	useEffect,
	useCallback,
	useState,
	MutableRefObject,
	ReactNode
} from 'react'

const useLazyLoading = (
	$target: MutableRefObject<null | HTMLElement | ReactNode>,
	options = {
		rootMargin: '0px',
		threshold: 1.0
	}
) => {
	let observer: IntersectionObserver

	const [isVisible, setVisibility] = useState(false)
	const handIntersected = useCallback(
		(entries: Array<IntersectionObserverEntry>) => {
			entries.forEach((entry: IntersectionObserverEntry) => {
				if (entry.isIntersecting) {
					observer.unobserve($target.current as Element)
					setVisibility(true)
				}
			})
		},
		[]
	)

	useEffect(() => {
		if ('IntersectionObserver' in window) {
			observer = new IntersectionObserver(handIntersected, options)

			observer.observe($target.current as Element)
		}

		return () => {
			if (observer) {
				observer.unobserve($target.current as Element)
			}
		}
	}, [$target])

	return isVisible
}

export default useLazyLoading
