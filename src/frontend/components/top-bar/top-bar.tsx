import React from 'react'
import { useSelector } from 'react-redux'
import { RootStateShape } from 'redux/store'

const TopBar = () => {
	const auth = useSelector((state: RootStateShape) => state.user.auth.isAuth)
	return (
		<div>
			is auth: {JSON.stringify(auth)} <br />
			<a href="/login">Log in</a>
			<br />
		</div>
	)
}

export default TopBar
