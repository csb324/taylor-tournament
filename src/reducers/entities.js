import merge from 'lodash/merge'


const initialEntities = {
	songs: {},
	rounds: {},
	tournaments: {},
	games: {}
}

export default function entities(state = initialEntities, action) {
	if (action.response && action.response.entities) {
		return merge({}, state, action.response.entities);
	}
	return state;
}
