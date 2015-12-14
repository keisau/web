import React, { PropTypes, Component } from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import NavContent from "./NavContent"
class NavBar extends Component {
	render () {
		let key = 0
		return (
			<div className="navBar">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">{`Kei Sau "PierreSaux" CHING`}</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							{NavContent}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}

export default NavBar
