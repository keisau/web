import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import Loader from "../components/Loader"

const Root = React.createClass ({
	componentDidMount () {
		this.props.setLoaded (true)
	},
	render () {
		return (
			<div id="rootContainer">
				<Loader {...this.props.root} />
				{ this.props.children }
			</div>
		)
	}
})

const mapStateToProps = (state) => {
	console.log ("RootContainer: ", state)
	return state
}

export default connect (mapStateToProps) (Root)
