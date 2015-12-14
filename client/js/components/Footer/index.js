import React, { Component } from "react"
import { Grid, Row, Col } from "react-bootstrap"
import FacebookLogo from "../FacebookLogo"
import GithubLogo from "../GithubLogo"
import WhatsappLogo from "../WhatsappLogo"
import EmailLogo from "../EmailLogo"

export default class Footer extends Component {
	render () {
		return (
			<div id="footer">
				<Grid>
					<Row>
						<Col className="left" md={12}>
							<i className="fa fa-copyright"></i> 2015 All Rights Reserved.
							<br />
							Designed and coded by
							<br />
							<a href="mailto:keisau.ching@pierresaux.me">
								{`Kei Sau "PierreSaux" CHING`}
							</a>
						</Col>
					</Row>
					<Row>
						<Col className="left" md={12}>
							<FacebookLogo />
							<GithubLogo />
							<EmailLogo />
							<WhatsappLogo />
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}
