import { Response } from 'types/http-client'

export const isResponseSuccess = (res: Response, statusText = 'OK') => {
	return res.statusText === statusText
}
