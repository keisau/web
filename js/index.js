require ("babel-polyfill")

if (process.env.NODE_ENV === "production") {
	console.log = (...args) => args
	window.console = console
}

import React from "react"

import { render } from "react-dom"
import { Provider } from "react-redux"

import { store } from "./store"
import App from "./routes"
import RootContainer from "./containers/RootContainer"

render (
	<App store={store} />,
	document.getElementById ("content")
)
