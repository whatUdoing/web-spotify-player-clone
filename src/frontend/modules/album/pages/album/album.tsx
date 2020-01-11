import React, { useEffect, useState } from 'react'
import { PlaylistObjectFull, IPlaylistsService, ServiceType } from 'services'
import { Container } from '../../../../lib/classes/dependency-injector/dependency-injector'
import { useServiceRequest } from '../../../../lib/hooks/use-service-request'
import { useParams } from 'react-router-dom'
import { getPlaylist } from '../../../../core/store-manager/playlists/actions'
import { Dispatch, Store } from 'redux'
import { connect } from 'react-redux'
import { RootStateShape } from 'redux-store'
import { getAlbum } from '../../../../core/store-manager/albums/actions'
import AlbumFullPreview from '../../components/album-full-preview/hoc-album-full-preview'

type Props = {
	getAlbum: (albumId: string) => void
}

const Track = ({ getAlbum }: Props) => {
	const { albumId } = useParams()

	useEffect(() => {
		if (albumId) {
			getAlbum(albumId)
		}
	}, [albumId])

	if (!albumId) return null

	return (
		<div>
			<AlbumFullPreview albumId={albumId} />
		</div>
	)
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		getAlbum(albumId: string) {
			dispatch(getAlbum(albumId))
		}
	}
}

export default connect(null, mapDispatch)(Track)
