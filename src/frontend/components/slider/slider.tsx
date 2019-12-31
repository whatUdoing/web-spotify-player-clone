import React, { ReactNode } from 'react'

const SliderItem = ({ children }) => {
	return (
		<div>
			slider item <br />
			{children}
		</div>
	)
}

type Props = {
	children: ReactNode
	title: string
}

const Slider = ({ children }: Props) => {
	// console.log(children)
	return (
		<div>
			{React.Children.map(children, child => (
				<SliderItem>{child}</SliderItem>
			))}
		</div>
	)
}

export default Slider
