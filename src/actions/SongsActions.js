import { GET_SONGS } from '../constants/ActionTypes';

export function returnSongs(songs) {
  return {
    type: GET_SONGS,
    data: songs
  };
}

// export function decrement() {
//   return {
//     type: DECREMENT_COUNTER
//   };
// }

// export function setTo(value) {
//   return {
//     type: SET_COUNTER,
//     data: value
//   };
// }

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState();

//     if (counter % 2 === 0) {
//       return;
//     }

//     dispatch(increment());
//   };
// }

// export function incrementAsync() {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, 1000);
//   };
// }

export function getSongs() {
  return (dispatch) => {

    const url = "/api/songs";

    fetch(url).then(function(response) { 
      return response.json()
    }).then((value) => {
      console.log(value);
      dispatch(returnSongs(value.data));
    });

  }
}