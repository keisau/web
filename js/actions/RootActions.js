import types from "../constants/RootActionTypes"

export function setLoaded (loaded) {
	return (dispatch, getState) => {
		dispatch ({
			type: types.SET_LOADED,
			loaded: loaded
		})
	}
}
