import { AuthObject } from 'services'
import React, { ReactNode, useEffect } from 'react'
import { setUserAuth } from '../../store-manager/user/actions'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import useAuth from '../../../lib/hooks/use-auth'

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
	const [isLoading, auth, error] = useAuth()

	useEffect(() => {
		if (auth) {
			setUserAuth(auth)
		}
	}, [auth])

	return <>{children}</>
}

export default connector(Bootstrap)
