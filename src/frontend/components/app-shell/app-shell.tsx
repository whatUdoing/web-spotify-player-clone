import React from 'react'

import MainLayout from '../../layouts/main'
import Sidebar from '../sidebar/sidebar'
import Player from '../player/player'
import TopBar from '../top-bar/top-bar'
import RouteManager from '../router/route-manager/redux-route-manager'

const MainView = () => {
	return (
		<>
			<TopBar />
			<RouteManager />
		</>
	)
}

const IndexView = () => {
	return (
		<MainLayout
			aside={<Sidebar />}
			footer={<Player />}
			main={<MainView />}
		/>
	)
}

export default IndexView
