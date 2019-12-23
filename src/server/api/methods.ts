export const getTokenAuthorizationHeader = (accessToken: string) => {
	return { Authorization: 'Bearer ' + accessToken }
}
