import React from "react"
import { Route, Link, IndexRoute } from "react-router"
import { Provider, connect } from "react-redux"
import { ReduxRouter, pushState } from "redux-router"

import reducer from "./reducers"

import NotFound from "./containers/NotFound"
import RootContainer from "./containers/RootContainer"
import { HomeContainer, HomeIndexContainer } from "./containers/Home"
import IndexContainer from "./containers/IndexContainer"
import history from "./history"

import { setLoaded } from "./actions/RootActions"

import { store } from "./store"

const App = React.createClass ({
	createElement (Component, props) {
		//console.log ("createElement: ", props, store.getState ())
		return (
			<Component {...props}
				store={store}
				setLoaded={(loaded) => store.dispatch (setLoaded (loaded))}
				/>
		)
	},
	initialize (nextState, replaceState) {
		store.dispatch (setLoaded (false))
	},
	componentWillMount () {
		console.log (this.props)
	},
	render () {
		return (
			<div id="app">
				<Provider store={store} >
					<ReduxRouter history={history} createElement={this.createElement} >
						<Route path="/" component={RootContainer} onEnter={this.initialize}>
							<IndexRoute component={IndexContainer} />
							<Route path="home" component={HomeContainer} >
								<IndexRoute component={HomeIndexContainer} />
							</Route>
							<Route path="*" component={NotFound} />
						</Route>
					</ReduxRouter>
				</Provider>
			</div>
		)
	}
})

export default connect (
	state => ({}),
	{ pushState }
) (App)
