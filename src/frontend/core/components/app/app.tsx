import React, { useState } from 'react'
import AppShell from '../app-shell/app-shell'
import { Provider } from 'react-redux'
import { initStore } from '../../store-manager/store'
import { BrowserRouter as Router } from 'react-router-dom'
import Bootstrap from '../bootstrap/hoc-bootstrap'
import ThemeManager from '../theme-manager/theme-manager'

const AppCore = () => {
	const store = initStore()

	return (
		<Provider store={store}>
			<ThemeManager>
				<Bootstrap>
					<Router>
						<AppShell />
					</Router>
				</Bootstrap>
			</ThemeManager>
		</Provider>
	)
}

export default AppCore
