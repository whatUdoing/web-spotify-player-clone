import React from 'react'

const SliderItem = ({ children }) => {
	return (
		<div>
			slider item <br />
			{children}
		</div>
	)
}

const Slider = ({ children }) => {
	console.log(children)
	return (
		<div>
			{React.Children.map(children, child => (
				<SliderItem>{child}</SliderItem>
			))}
		</div>
	)
}

export default Slider
