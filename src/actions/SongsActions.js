import { GET_SONGS, GET_SONGS_SUCCESS } from '../constants/ActionTypes';
import { Schema, arrayOf, normalize } from 'normalizr';
import { push } from 'react-router-redux';

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

    return fetch(url).then((response) => { 
      return response.json()
    }).then((value) => {

      const normalizedSongs = normalize(value, {
        data: arrayOf(songSchema)
      });      

      dispatch(returnSongs(normalizedSongs));
    });

  }
}

export function submitSongs(selectedSongs) {
  const url = "/api/tournament";
  const body = {
    songs: selectedSongs
  };

  return (dispatch) => {

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(body)
    }).then((response) => {
      return response.json()

    }).then((value) => {
      console.log(value);
      // dispatch(push('/tournament/:id'))

    }).catch((err) => {
      console.log(err);

    });
  }
}