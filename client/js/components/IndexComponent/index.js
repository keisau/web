import React, { PropTypes, Component } from "react"

import Introduction from "./Introduction"
import Skills from "./Skills"

class IndexComponent extends Component {
	render () {
		return (
			<div id="indexContent">
				<Introduction />
				<Skills />
			</div>
		)
	}
}

export default IndexComponent
