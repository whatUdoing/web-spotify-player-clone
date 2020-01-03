import apiSettings from '../../api/config'

export const getResourceUri = (url: string) => {
	// todo different types :?
	return url.replace(
		`${apiSettings.spotifyBaseApiUrl}${apiSettings.apiPrefix}`,
		''
	)
}
