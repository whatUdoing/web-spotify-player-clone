import MainNav from './main-nav'
import { connect } from 'react-redux'
import { RootStateShape } from '../../store/reducers'

const mapState = (state: RootStateShape) => {
	return {
		routes: state.router.routes
	}
}

export default connect(mapState)(MainNav)
