import React, { useState } from 'react'
import AppShell from '../app-shell/app-shell'
import { Provider } from 'react-redux'
import { initStore } from '../../redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import Bootstrap from '../bootstrap/hoc-bootstrap'
import ThemeManager from '../theme-manager/theme-manager'

export default () => {
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
