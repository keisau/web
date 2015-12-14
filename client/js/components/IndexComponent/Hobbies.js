import React, { PropTypes, Component } from "react"
import { Grid, Col, Row } from "react-bootstrap"

class Hobbies extends Component {
	render () {
		return (
			<div id="hobbies">
				<div id="background"></div>
				<Grid id="mainGrid">
					<Row>
						<Col md={1}></Col>
						<Col md={6}>
							<div id="paragraph1">
								<p>
									"Enlightenment is man's emergence from his self-imposed immaturity"
								</p>
								<p>
									- <i>Immanuel Kant</i>
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={6}></Col>
						<Col md={5}>
							<div id="paragraph2">
								<p>
									Anything that can go wrong, will go wrong
								</p>
								<p>
									- <i>Murphy's Law</i>
							</p>
						</div>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Hobbies
