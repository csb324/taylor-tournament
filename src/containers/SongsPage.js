import React, { Component, PropTypes } from 'react';
import * as songActions from '../actions/SongsActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Song from '../components/Song';


const loadData = (props) => {
  props.getSongs();
}

class SongsPage extends Component {

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    console.log(this.props);
    const { songs, selectedSongs } = this.props;
    const renderedSongs = selectedSongs.map((songID) => {
      let song = songs[songID];
      return <Song key={song.id} song={song} />;
    })

    return (
      <div>
        { renderedSongs }
      </div>
    )
  }
}

SongsPage.propTypes = {
  songs: PropTypes.object.isRequired,
  selectedSongs: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const songs = state.entities.songs;
  const selectedSongs = state.selectedSongs

  return {
    songs,
    selectedSongs
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(songActions, dispatch)
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SongsPage)
