import React, { useState } from 'react'
import AppShell from '../app-shell/app-shell'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { BrowserRouter as Router } from 'react-router-dom'

export default () => {
	const [data, setData] = useState()

	return (
		<Provider store={store}>
			<Router>
				<AppShell />
			</Router>
		</Provider>

		// <div className="App">
		// 	<Container>
		// 		<Row>
		// 			<Col md="2">col 1</Col>
		// 			<Col md="2">col 2</Col>
		// 		</Row>
		// 	</Container>
		// 	<h1>Spotify Profile</h1>
		// 	<a href="/login">Log in</a>
		// 	<br />
		// 	<button
		// 		onClick={() => {
		// 			axios.get('/v1/me').then((resp: AxiosResponse) => {
		// 				console.log(resp.data)
		// 				setData(JSON.stringify(resp.data))
		// 			})
		// 		}}
		// 	>
		// 		getData
		// 	</button>
		// 	Data:
		// 	<p>{data}</p>
		// </div>
	)
}
