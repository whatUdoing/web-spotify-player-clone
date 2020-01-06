import React, { useEffect, useState } from 'react'
import {
	PlaylistObjectFull,
	IPlaylistsService,
	ServiceType
} from 'types/services'
import { Container } from '../../utils/classes/dependency-injector/dependency-injector'
import { useServiceRequest } from '../../utils/hooks/use-service-request'
import { useParams } from 'react-router-dom'
import { getPlaylist } from '../../redux/playlists/actions'
import { Dispatch, Store } from 'redux'
import { connect } from 'react-redux'
import { RootStateShape } from 'redux/store'
import PlaylistFullView from '../../components/playlists/playlist-full-view/hoc-playlist-full-view'

type Props = {
	getPlaylist: (playlistId: string) => void
}

const Playlist = ({ getPlaylist }: Props) => {
	const { playlistId } = useParams()

	useEffect(() => {
		if (playlistId) {
			getPlaylist(playlistId)
		}
	}, [playlistId])

	if (!playlistId) return null

	return (
		<div>
			<PlaylistFullView playlistId={playlistId} />
		</div>
	)
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		getPlaylist(playlistId: string) {
			dispatch(getPlaylist(playlistId))
		}
	}
}

export default connect(null, mapDispatch)(Playlist)
