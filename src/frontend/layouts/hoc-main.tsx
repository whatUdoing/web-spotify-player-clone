import { connect } from 'react-redux'
import { RootStateShape } from 'redux-store'
import Main from './main'

const mapState = (state: RootStateShape) => {
	return {
		isSidebarVisible: state.ui.isSidebarOpen
	}
}

export default connect(mapState)(Main)
