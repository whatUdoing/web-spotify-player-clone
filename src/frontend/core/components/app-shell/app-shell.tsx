import React from 'react'
import { css } from '@emotion/core'

import MainLayout from '../../../layouts/hoc-main'
import Sidebar from '../../../components/sidebar/sidebar'
import Player from '../../../modules/music-player/components/player/hoc-player'
import TopBar from '../../../components/top-bar/hoc-top-bar'
import ModalPortal from '../../../components/modal/modal-portal'
import MainView from '../../pages/main'

const AppShell = () => {
	return (
		<div
			css={theme => css`
				color: ${theme.theme3};
				background-color: ${theme.theme8};
			`}
		>
			<MainLayout
				header={<TopBar />}
				aside={<Sidebar />}
				main={<MainView />}
				footer={<Player />}
			/>

			<ModalPortal />
		</div>
	)
}

export default AppShell
