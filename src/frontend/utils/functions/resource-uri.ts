const mapTypeToUrl: Record<string, string> = {
	playlist: '/playlist/:playlistId',
	artist: '/artist/:artistId',
	track: '/track/:trackId',
	album: '/album/:albumId'
}

export const getResourceUri = (
	type: string,
	params: Record<string, string>
) => {
	return Object.keys(params).reduce((prev, param) => {
		return prev.replace(param, params[param])
	}, mapTypeToUrl[type])
}
