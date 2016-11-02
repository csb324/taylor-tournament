import { GET_SONGS } from '../constants/ActionTypes';

const initialState = [];

export default function selectedSongs(state = initialState, action) {
  switch (action.type) {

  case GET_SONGS:
    return action.response.result.data

  default:
    return state;
  }
}
