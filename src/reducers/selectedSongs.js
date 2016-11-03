import { GET_SONGS } from '../constants/ActionTypes';

const initialSelectedSongs = [];

export default function selectedSongs(state = initialSelectedSongs, action) {
  switch (action.type) {

  case GET_SONGS:
    return action.response.result.data

  default:
    return state;
  }
}
