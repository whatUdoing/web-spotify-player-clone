import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios, { AxiosResponse } from 'axios'

const App = () => {
	const [data, setData] = useState()

	return (
		<div className="App">
			<h1>Spotify Profile</h1>
			<a href="/login">Log in</a>
			<br />
			<button
				onClick={() => {
					axios.get('/v1/me').then((resp: AxiosResponse) => {
						console.log(resp.data)
						setData(JSON.stringify(resp.data))
					})
				}}
			>
				getData
			</button>
			Data:
			<p>{data}</p>
		</div>
	)
}
;(async () => {
	ReactDOM.render(<App />, document.getElementById('app'))
})()
