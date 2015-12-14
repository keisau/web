import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

class NotFound extends Component {
	render () {
		return (
			<div id="notFoundContainer">
				Not Found
			</div>
		)
	}
}

export const NotFoundContainer = connect (state => state) (NotFound)
