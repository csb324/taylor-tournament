import { GET_SONGS } from '../constants/ActionTypes';
import { Schema, arrayOf, normalize } from 'normalizr';


const songSchema = new Schema('songs');



export function returnSongs(response) {
  return {
    type: GET_SONGS,
    response
  };
}

export function getSongs() {
  return (dispatch) => {

    const url = "/api/songs";

    fetch(url).then(function(response) { 
      return response.json()
    }).then((value) => {
      const normalizedSongs = normalize(value, {
        data: arrayOf(songSchema)
      });
      dispatch(returnSongs(normalizedSongs));
    });

  }
}
