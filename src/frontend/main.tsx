import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
import { injectApiClients } from './api/index'
import { initServices } from './services/index'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'
import 'reset-css'
import './styles/build.css'
;(async () => {
	/**
	 * Code from event-bus actions concept, more details in redux/user/subscriber/index file
	 */
	// Container.set('event-bus', new Observer())

	injectApiClients(axios)
	initServices()

	ReactDOM.render(<App />, document.getElementById('app'))
})()
