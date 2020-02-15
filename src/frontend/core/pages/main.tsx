import React from 'react'
import RouteManager from '../components/router/route-manager/route-manager'
import Routes from '../../routes/index'

const MainView = () => {
	return (
		<>
			{/* <TopBar /> */}
			<RouteManager routes={Routes} />
		</>
	)
}

export default MainView
