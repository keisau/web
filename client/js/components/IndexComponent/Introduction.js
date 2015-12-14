import React, { PropTypes, Component } from "react"
import { Grid, Col, Row } from "react-bootstrap"

class Introduction extends Component {
	render () {
		return (
			<div id="introduction">
				<Grid>
					<Row>
						<Col md={8}>
							"Enlightenment is man's emergence from his self-imposed immaturity"
							<br />
							<i>-Immanuel Kant</i>
						</Col>
						<Col className="vertical" md={4}>
							<p>道可道，非常道；名可名，非常名</p>
							<i>－《道德經》</i>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Introduction
