import React, { PropTypes, Component } from "react"
import { Grid, Col, Row, ListGroup, ListGroupItem } from "react-bootstrap"

const languageOrPlatform = [
	{ name: "JavaScript (ES5/ES6)", url: "http://www.ecma-international.org/ecma-262/6.0/" },
	{ name: "Node.js", url: "https://nodejs.org" },
	{ name: "CSS", url: "http://www.w3.org/Style/CSS/" },
	{ name: "SASS", url: "http://sass-lang.com" },
	{ name: "C (C89)", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
	{ name: "C++ (C++03)", url: "http://www.cplusplus.com" }
]

const frameworkOrLibrary = [
	{ name: "React", url: "https://facebook.github.io/react/" },
	{ name: "Flux", url: "https://facebook.github.io/flux/" },
	{ name: "Redux", url: "https://github.com/rackt/redux" },
	{ name: "Express", url: "http://expressjs.com/en/index.html" },
	{ name: "Bootstrap 3", url: "https://getbootstrap.com" },
	{ name: "jQuery", url: "https://jquery.com/" }
]

const platformOrSystem = [
	{ name: "OS X", url: "http://www.apple.com/osx/" },
	{ name: "Ubuntu Linux", url: "http://www.ubuntu.com" },
	{ name: "Fedora Linux", url: "https://getfedora.org" },
	{ name: "bash", url: "https://www.gnu.org/software/bash/" },
	{ name: "zsh", url: "http://www.zsh.org" }
]

class Skills extends Component {
	render () {
		return (
			<div id="skills">
				<div id="background"></div>
				<Grid id="mainGrid">
					<Row>
						<Col md={1}></Col>
						<Col md={3}>
						</Col>
						<Col md={4} className="white">
							<div id="mainTitle">Skills</div>
						</Col>
					</Row>
					<Row>
						<Col md={1}></Col>
						<Col md={3}>
							<div id="paragraph1">
								<div id="title">Framework/Library</div>
								<ListGroup>
									{
										frameworkOrLibrary.map ((skill, index) => {
											return <ListGroupItem key={index} href={skill.url}>{skill.name}</ListGroupItem>
										})
									}
								</ListGroup>
							</div>
						</Col>
						<Col md={4} className="white">
							<div id="paragraph2">
								<div id="title">Language/Runtime</div>
								<ListGroup>
									{
										languageOrPlatform.map ((skill, index) => {
											return <ListGroupItem key={index} href={skill.url}>{skill.name}</ListGroupItem>
										})
									}
								</ListGroup>
							</div>
						</Col>
						<Col md={3}>
							<div id="paragraph3">
								<div id="title">Platform/OS</div>
								<ListGroup>
									{
										platformOrSystem.map ((skill, index) => {
											return <ListGroupItem key={index} href={skill.url}>{skill.name}</ListGroupItem>
										})
									}
								</ListGroup>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Skills
