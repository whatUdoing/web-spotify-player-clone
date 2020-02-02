import React, { SyntheticEvent, useState, useRef, useEffect } from 'react'

const calculateRangeValues = (
	clientX: number,
	containerBCR: DOMRect,
	rangeSpan: number
) => {
	const toMove = Math.min(
		Math.round(clientX - containerBCR.left),
		containerBCR.width
	)

	const width = toMove < 0 ? 0 : toMove
	const widthInPercentage = (width * 100) / containerBCR.width

	return [width, (rangeSpan * widthInPercentage) / 100]
}

type Props = {
	onChange: (newValue: number) => void
	initialValue: number
	min?: number
	max?: number
	step?: number
}
const RangeInput = ({
	initialValue = 0,
	onChange = (newValue: number) => {},
	min = 0,
	max = 1,
	step = 0.1
}: Props) => {
	const [value, setValue] = useState(initialValue)
	const rangeContainer = useRef<HTMLDivElement>(null)
	const rangeProgress = useRef<HTMLDivElement>(null)
	const [containerBCR, setContainerBCR] = useState<DOMRect>()

	useEffect(() => {
		if (rangeProgress?.current) {
			rangeProgress.current.style.width = '50%'
		}

		setContainerBCR(rangeContainer.current?.getBoundingClientRect())
	}, [])

	useEffect(() => {
		if (containerBCR) {
			rangeContainer?.current?.addEventListener(
				'mousedown',
				handleMouseDown
			)
		}

		return () => {
			document.documentElement.removeEventListener(
				'mouseup',
				handleMouseUp
			)

			document.documentElement.removeEventListener(
				'mousemove',
				handleMouseMove
			)
			rangeContainer?.current?.removeEventListener(
				'mousedown',
				handleMouseDown
			)
		}
	}, [containerBCR, onChange])

	const handleMouseMove = (evt: MouseEvent) => {
		if (!containerBCR) return

		const [width, inputValue] = calculateRangeValues(
			evt.clientX,
			containerBCR,
			max - min
		)

		onChange(inputValue)
		setValue(inputValue)

		requestAnimationFrame(() => {
			if (rangeProgress?.current) {
				rangeProgress.current.style.width = `${width}px`
			}
		})
	}

	const handleMouseUp = (evt: MouseEvent) => {
		document.documentElement.removeEventListener('mouseup', handleMouseUp)
		document.documentElement.removeEventListener(
			'mousemove',
			handleMouseMove
		)
	}

	const handleMouseDown = () => {
		document.documentElement.addEventListener('mousemove', handleMouseMove)
		document.documentElement.addEventListener('mouseup', handleMouseUp)
	}

	const handleInputChange = (evt: SyntheticEvent) => {
		const newValue = evt.target.value

		setValue(newValue)
		onChange(newValue)
	}

	return (
		<div ref={rangeContainer} className="input-range">
			<div className="input-range__progress">
				<div
					ref={rangeProgress}
					className="input-range__progress-value"
				></div>
			</div>
			<input
				className="hidden"
				onChange={handleInputChange}
				type="range"
				min={min}
				max={max}
				value={value}
				step={step}
			/>
		</div>
	)
}

export default RangeInput
