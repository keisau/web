require ("../../styles/stylesheet.scss")

import React, { PropTypes } from "react"
import { connect } from "react-redux"
import { History } from "react-router"
import Loader from "react-loader"

const LoaderWrapper = React.createClass ({
	render () {
		const { loaded } = this.props
		return loaded ? (<div id="spinnerLoader" className="hide"></div>) : (
			<div id="spinnerLoader">
				<Loader className="spinner" top="50%" left="50%" scale={1} hwaccel={true} loaded={loaded} />
			</div>
		)
	}
})

export default LoaderWrapper
