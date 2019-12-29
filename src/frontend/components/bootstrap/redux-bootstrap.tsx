import { IUserService, AuthObject } from 'types/user-service'
import React, { ReactNode, useEffect } from 'react'
import { setUserAuth } from '../../redux/user/actions'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { Container } from '../../utils/classes/dependency-injector'

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setUserAuth: (auth: AuthObject) => {
		dispatch(setUserAuth(auth))
	}
})

const connector = connect(null, mapDispatchToProps)

type Props = {
	children: ReactNode
} & ConnectedProps<typeof connector>

const Bootstrap = ({ children, setUserAuth }: Props) => {
	useEffect(() => {
		;(async () => {
			const userService: IUserService = Container.get(
				'user-service'
			) as IUserService

			const [auth, error] = await userService.isAuthenticated()

			if (error) {
				/**
				 * handle flash message or something :?
				 */
				console.error(error)
			}

			if (auth) {
				setUserAuth(auth)
			}
		})()
	}, [])

	return <>{children}</>
}

export default connector(Bootstrap)
