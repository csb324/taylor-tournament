import React, { Component, PropTypes } from 'react';

export default class Song extends Component {
	
  render() {
    return (
      <div className="song">
        <h3>{ this.props.song.name }</h3>
        <p>{ this.props.song.album }</p>
      </div>
    );
  }


}


Song.propTypes = {
  song: PropTypes.shape({
    name: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};