import React, { PropTypes, Component } from "react"

import Introduction from "./Introduction"
import Skills from "./Skills"
import Hobbies from "./Hobbies"

class IndexComponent extends Component {
	render () {
		return (
			<div id="indexContent">
				<Introduction />
				<Skills />
				<Hobbies />
			</div>
		)
	}
}

export default IndexComponent
