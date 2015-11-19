import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import Loader from "../components/Loader"

const Root = React.createClass ({
	componentDidMount () {
		this.props.setLoaded (true)
	},
	render () {
		return (
			<div id="notFoundContainer">
				Not Found
			</div>
		)
	}
})

const mapStateToProps = (state) => {
	console.log ("Not Found Container: ", state)
	return state
}

export default connect (mapStateToProps) (Root)
