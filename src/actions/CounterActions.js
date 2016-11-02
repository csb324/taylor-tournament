import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER } from '../constants/ActionTypes';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function setTo(value) {
  return {
    type: SET_COUNTER,
    data: value
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

export function setToSongCount() {
  return (dispatch) => {

    const url = "/api/songs";

    fetch(url).then(function(response) { 
      return response.json()
    }).then((value) => {
      console.log(value);
      dispatch(setTo(value.data.length));
    });

  }
}


export function createGame() {
  return (dispatch) => {
    const url = "/api/games";

    fetch(url, {
      method: 'POST'
    }).then(function(response) {
      return response.json();
    }).then((response) => {
      console.log(response);
      dispatch(increment());     
    });
  }
}