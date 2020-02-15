import React from 'react'

type Props = {
	isSideabrVisible: boolean
	hideSidebar: () => void
	showSidebar: () => void
}
const NavToggler = ({ isSideabrVisible, hideSidebar, showSidebar }: Props) => {
	return (
		<>
			{isSideabrVisible ? (
				<button onClick={hideSidebar} className="main-menu__toggler">
					<span className="fas fa-times"></span>
				</button>
			) : (
				<button className="main-menu__toggler" onClick={showSidebar}>
					<span className="fas fa-bars"></span>
				</button>
			)}
		</>
	)
}

export default NavToggler
