import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

const Index = React.createClass ({
	tryRedirect (props) {
		const { history } = props
		history.replaceState (null, "/home")
		location.reload ()
	},
	componentWillReceiveProps (props) {
		this.tryRedirect (props)
	},
	componentWillMount () {
		this.tryRedirect (this.props)
	},
	render () {
		return (
			<div></div>
		)
	}
})

const mapStateToProps = (state) => {
	console.log ("RootContainer: ", state)
	return state
}

export default connect (mapStateToProps) (Index)
