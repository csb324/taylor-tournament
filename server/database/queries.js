const models = require('../models');

function getAllSongs(req, res) {
  models.Song.findAll().then(function(songs) {
    res.status(200)
        .json({
          status: 'success',
          data: songs,
          message: 'Retrieved ALL songs'
        });
  });
};


module.exports = {
  getAllSongs: getAllSongs
};

// module.exports = {
//   getAllSongs: getAllSongs,
//   getSingleSong: getSingleSong,
//   createSong: createSong,
//   updateSong: updateSong,
//   removeSong: removeSong
// }