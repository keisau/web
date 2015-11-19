import types from "../constants/RootActionTypes"

const initialState = {
	loaded: false,
}

function setLoaded (state = initialState.auth, action) {
	if (action.type === types.SET_LOADED) {
		return action.loaded
	} else {
		return state
	}
}

export default function root (state = initialState, action) {
	switch (action.type) {
		default:
			return {
				loaded: setLoaded (state.loaded, action)
			}
	}
}
