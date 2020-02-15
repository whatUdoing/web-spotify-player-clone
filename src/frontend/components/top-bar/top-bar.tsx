import React from 'react'
import { User } from 'services'

type Props = {
	user: User | null
	isAuth: boolean
	showSidebar: () => void
}

const TopBar = ({ user, isAuth, showSidebar }: Props) => {
	return (
		<div className="ui__box_s full_height">
			<div className="row middle-xs full_height">
				{user && (
					<div className="col-xs">
						<span className="btn btn_outline">
							{user.display_name}
						</span>
					</div>
				)}

				<div className="col-xs align_right">
					{isAuth ? (
						<a className="color_light-3 size_xl" href="/logout">
							<span className="fas fa-sign-out-alt"></span>
						</a>
					) : (
						<a className="color_light-3 size_xl" href="/login">
							<span className="fas fa-sign-in-alt"></span>
						</a>
					)}

					<button
						className="main-menu__toggler ml-2"
						onClick={showSidebar}
					>
						<span className="fas fa-bars"></span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default TopBar
