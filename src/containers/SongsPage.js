import React, { Component, PropTypes } from 'react';
import { getSongs } from '../actions/SongsActions';
import { connect } from 'react-redux';

const loadData = (props) => {
  props.getSongs();
}

class SongsPage extends Component {

  componentWillMount() {
    loadData(this.props);
  }

  renderSong(song) {
    return (
      <div key={song.id}> 
        <h3>{song.name}</h3>
      </div>
    )
  }

  render() {
    const { songs } = this.props;

    console.log(this.props);

    return (
      <div>
        <h1>hi!</h1>
        { this.props.selectedSongs.map((songID) => {
          return this.renderSong(this.props.songs[songID]);
        })}

      </div>
    )
  }
}

SongsPage.propTypes = {
  songs: PropTypes.object.isRequired,
  selectedSongs: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const { entities: { songs }, selectedSongs } = state;

  return {
    songs,
    selectedSongs
  }
}

export default connect(mapStateToProps, {
  getSongs
})(SongsPage)
