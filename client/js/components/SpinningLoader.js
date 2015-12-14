import React, { PropTypes, Component } from "react"
import Loader from "react-loader"

class SpinningLoader extends Component {
	render () {
		console.log ("SpinningLoader", this.props)
		const { loaded } = this.props
		return loaded ? (<div id="spinningLoader" className="hide"></div>) : (
			<div id="spinningLoader">
				<Loader className="spinner" top="50%" left="50%" scale={1} hwaccel={true} loaded={loaded} />
			</div>
		)
	}
}

SpinningLoader.propTypes = {
	loaded: PropTypes.bool
}

export default SpinningLoader
