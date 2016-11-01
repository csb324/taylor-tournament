import React, { Component, PropTypes } from 'react';

export default class Songs extends Component {
	renderSongList() {
    return Object.keys(this.props.songs).map(this.renderSong.bind(this));
  }

  renderSong(key) {
    var item = this.props.songs[key];
    return (
    	<li key={key}>{item.name}</li>
    );
  }

  getSongs() {
    this.props.actions.getSongs();
  };

  render() {
    return (
      <div className="songs">
        <button onClick={() => {this.getSongs();}}>-</button>
        <ul className="songs-list">
          { this.renderSongList() }
        </ul>
      </div>
    );
  }


}


Songs.propTypes = {
  songs: PropTypes.object.isRequired
};