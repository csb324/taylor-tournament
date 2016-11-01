import { GET_SONGS } from '../constants/ActionTypes';

const initialState = {};

export default function counter(state = initialState, action) {
  switch (action.type) {
  case GET_SONGS:
    console.log(state);
    let newState = {};

    action.data.map((song) => {
    	newState[song.id] = song
    })

    return newState;

  default:
    return state;
  }
}
