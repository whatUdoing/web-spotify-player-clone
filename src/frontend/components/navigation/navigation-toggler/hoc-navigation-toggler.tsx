import { connect } from 'react-redux'
import NavigationToggler from './navigation-toggler'
import { RootStateShape } from 'redux-store'
import { Dispatch } from 'redux'
import {
	showSidebar,
	hideSidebar
} from '../../../core/store-manager/ui/actions'

const mapState = (state: RootStateShape) => {
	return {
		isSideabrVisible: state.ui.isSidebarOpen
	}
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		hideSidebar: () => {
			dispatch(hideSidebar())
		},

		showSidebar: () => {
			dispatch(showSidebar())
		}
	}
}

export default connect(mapState, mapDispatch)(NavigationToggler)
