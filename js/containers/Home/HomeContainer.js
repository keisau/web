import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

const HomeContainer = React.createClass ({
	componentDidMount () {
		this.props.setLoaded (true)
	},
	render () {
		console.log ("render (home container): ", this.props)
		return (
			<div id="mainPageContainer">
				{this.props.children}
			</div>
		)
	}
})

const mapStateToProps = (state) => {
	console.log ("HomeContainer: ", state)
	return state
}

export default connect (mapStateToProps) (HomeContainer)
