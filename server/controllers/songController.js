const models = require('../models');

const SongController = {
	getAll: function(req, res) {
		models.Song.findAll().then(function(songs) {
			res.status(200)
        .json({
          status: 'success',
          data: songs,
          message: 'Retrieved ALL songs'
        });
      })
	}
}

module.exports = SongController;