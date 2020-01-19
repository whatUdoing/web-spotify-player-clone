import React from 'react'
import { useSelector } from 'react-redux'
import { RootStateShape } from 'redux-store'
import { Container, Row, Col } from '../flexobx-grid/index'

const TopBar = () => {
	const auth = useSelector((state: RootStateShape) => state.user.auth.isAuth)

	return (
		<div className="ui__box">
			<div className="row">
				<div className="col-xs">
					is auth: {JSON.stringify(auth)} <br />
				</div>

				<div className="col-xs align_right">
					<a className="btn btn_bg" href="/login">
						Log in
					</a>
				</div>
			</div>
		</div>
	)
}

export default TopBar
