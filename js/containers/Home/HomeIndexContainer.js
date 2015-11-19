import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

const HomeIndex = React.createClass ({
	componentDidMount () {
		this.props.setLoaded (true)
	},
	render () {
		console.log ("render (home index container): ", this.props)
		return (
			<div id="homeIndex">
				Hello World!
			</div>
		)
	}
})

const mapStateToProps = (state) => {
	console.log ("HomeIndexContainer: ", state)
	return state
}

export default connect (mapStateToProps) (HomeIndex)
