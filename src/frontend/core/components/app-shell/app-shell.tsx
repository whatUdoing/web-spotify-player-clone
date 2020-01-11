import React from 'react'
import { css } from '@emotion/core'

import MainLayout from '../../../layouts/main'
import Sidebar from '../../../components/sidebar/sidebar'
import Player from '../../../modules/music-player/components/player/player'
import TopBar from '../../../components/top-bar/top-bar'
import RouteManager from '../router/route-manager/hoc-route-manager'
import ModalPortal from '../../../components/modal/modal-portal'

const MainView = () => {
	return (
		<>
			<TopBar />
			<RouteManager />
		</>
	)
}

const AppShell = () => {
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

export default AppShell
