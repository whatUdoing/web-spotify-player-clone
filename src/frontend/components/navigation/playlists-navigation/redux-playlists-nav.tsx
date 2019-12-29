import React from 'react'
import { RouterRoutesType } from '../../../redux/router/reducers'
import NavigationList from '../navigation-list/navigation-list'
import { RootStateShape } from '../../../redux/store'
import { connect } from 'react-redux'

type Props = {
	playlists: RouterRoutesType
}

const mapState = (state: RootStateShape) => {
	return {
		playlists: state.router.routes
	}
}

const PlaylistsNavigation = ({ playlists }: Props) => {
	// const playlistsNavigationItems = playlists.map(() => {})
	// return <NavigationList items={playlistsNavigationItems} />
	// TODO: remove, mock
	return (
		<span>
			<br />
			playlist list
		</span>
	)
}

export default connect(mapState)(PlaylistsNavigation)
