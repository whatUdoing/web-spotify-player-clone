import React from 'react'
import ReactDOM from 'react-dom'
import App from './core/components/app/app'
import { injectApiClients } from './core/api/index'
import { initServices } from './core/services/index'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'
import 'reset-css'
import './styles/build.less'
import 'flexboxgrid'
;(async () => {
	/**
	 * Code from event-bus actions concept, more details in redux/user/subscriber/index file
	 */
	// Container.set('event-bus', new Observer())

	injectApiClients(axios)
	initServices()

	ReactDOM.render(<App />, document.getElementById('app'))
})()
