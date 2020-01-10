import React from 'react'
import { css } from '@emotion/core'

import MainLayout from '../../layouts/main'
import Sidebar from '../sidebar/sidebar'
import Player from '../player/player'
import TopBar from '../top-bar/top-bar'
import RouteManager from '../router/route-manager/hoc-route-manager'
import ModalPortal from '../modal/modal-portal'

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
		<div
			css={theme => css`
				color: ${theme.theme3};
				background-color: ${theme.theme8};
			`}
		>
			<MainLayout
				aside={<Sidebar />}
				footer={<Player />}
				main={<MainView />}
			/>

			<ModalPortal />
		</div>
	)
}

export default IndexView
