import { AuthObject } from 'services'
import React, { ReactNode, useEffect } from 'react'
import { setUserAuth } from '../../store-manager/user/actions'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import useAuth from '../../../lib/hooks/use-auth'
import { hideSidebar, showSidebar } from '../../store-manager/ui/actions'

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setUserAuth: (auth: AuthObject) => {
		dispatch(setUserAuth(auth))
	},

	hideSidebar: () => {
		dispatch(hideSidebar())
	}
})

const connector = connect(null, mapDispatchToProps)

type Props = {
	children: ReactNode
} & ConnectedProps<typeof connector>

const Bootstrap = ({ children, setUserAuth, hideSidebar }: Props) => {
	const [isLoading, auth, error] = useAuth()

	useEffect(() => {
		/**
		 * This is for mobile purpose only, on desktop navigation is always visible,
		 * regardless of isSidebarVisible store property
		 */
		hideSidebar()
	}, [])

	useEffect(() => {
		if (auth) {
			setUserAuth(auth)
		}
	}, [auth])

	return <>{children}</>
}

export default connector(Bootstrap)
