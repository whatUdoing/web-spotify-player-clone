import { NavigationItem } from 'components'
import { NavLink } from 'react-router-dom'
import React from 'react'

type Props = {
	items: Array<NavigationItem>
	override?: {
		linkClass: string
		linkClassActive: string
	}
}

const NavigationList = ({ items, override }: Props) => {
	return (
		<ul>
			{items.map(item => {
				return (
					<li className="main-menu__item" key={item.id}>
						<NavLink
							activeClassName={
								override?.linkClassActive ??
								'main-menu__link_active'
							}
							className={
								override?.linkClass ?? 'main-menu__link link'
							}
							to={item.to}
							exact={item.exact}
						>
							{item.name}
						</NavLink>
					</li>
				)
			})}
		</ul>
	)
}

export default NavigationList
