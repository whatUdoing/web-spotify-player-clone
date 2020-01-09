import { NavigationItem } from 'redux-store'
import { Link } from 'react-router-dom'
import React from 'react'

type Props = {
	items: Array<NavigationItem>
}

const NavigationList = ({ items }: Props) => {
	return (
		<ul>
			{items.map(item => {
				return (
					<li key={item.id}>
						<Link to={item.to}>{item.name}</Link>
					</li>
				)
			})}
		</ul>
	)
}

export default NavigationList
