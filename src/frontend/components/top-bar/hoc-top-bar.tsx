import TopBar from './top-bar'
import { connect } from 'react-redux'
import { RootStateShape } from 'redux-store'
import { Dispatch } from 'redux'
import { showSidebar } from '../../core/store-manager/ui/actions'

const mapState = (state: RootStateShape) => {
	return {
		user: state.user.profile,
		isAuth: state.user.auth.isAuth
	}
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		showSidebar: () => {
			dispatch(showSidebar())
		}
	}
}

export default connect(mapState, mapDispatch)(TopBar)
