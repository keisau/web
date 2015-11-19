import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

const Home = React.createClass ({
	render () {
		console.log ("render (home container): ", this.props)
		return (
			<div id="homeContainer">
				{this.props.children}
			</div>
		)
	}
})

const mapStateToProps = (state) => {
	console.log ("HomeContainer: ", state)
	return state
}

export default connect (mapStateToProps) (Home)
