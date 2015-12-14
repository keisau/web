import React, { PropTypes, Component } from "react"
import { connect } from "react-redux"

import IndexComponent from "../components/IndexComponent"

export * from "./notFoundContainer"
export * from "./rootContainer"

class Index extends Component {
	render () {
		return (
			<div id="indexContainer">
				<IndexComponent />
			</div>
		)
	}
}
export default connect (state => state) (Index)
