import React from 'react'

import MainLayout from '../../layouts/main'
import Sidebar from '../sidebar/sidebar'
import Player from '../player/player'
import TopBar from '../top-bar/top-bar'
import RouteManager from '../router/route-manager/redux-route-manager'
import { useSelector } from 'react-redux'

const MainView = () => {
	const auth = useSelector(state => state.user.auth)

	return (
		<>
			is auth: {JSON.stringify(auth)}
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
