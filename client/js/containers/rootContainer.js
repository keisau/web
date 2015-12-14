require ("../../styles/stylesheet.scss")

import React, { PropTypes, Component } from "react"
import { connect } from "react-redux"
import SpinningLoaderContainer from "./SpinningLoaderContainer"
import NavBar from "../components/NavBar"

class Root extends Component {
	render () {
		console.log ("Root", this)
		return (
			<div id="rootContainer">
				<SpinningLoaderContainer />
				<NavBar />
				{this.props.children}
			</div>
		)
	}
}
export const RootContainer = connect (state => state) (Root)
