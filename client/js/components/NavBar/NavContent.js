import React from "react"
import { NavItem } from "react-bootstrap"

let key = 0

export default [
	<NavItem eventKey={key} key={key++} href="#">About</NavItem>,
	<NavItem eventKey={key} key={key++} href="#contact">Contact</NavItem>
]
