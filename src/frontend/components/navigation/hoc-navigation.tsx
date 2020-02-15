import Navigation from './navigation'
import { connect } from 'react-redux'
import { RootStateShape } from 'redux-store'
import { hideSidebar } from '../../core/store-manager/ui/actions'
import { Dispatch } from 'redux'

const mapState = (state: RootStateShape) => {
	return {
		isAuth: state.user.auth.isAuth
	}
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		hideSidebar: () => {
			dispatch(hideSidebar())
		}
	}
}

export default connect(mapState, mapDispatch)(Navigation)
