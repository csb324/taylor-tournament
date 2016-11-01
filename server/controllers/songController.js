import models from '../models';

const Song = models.Song;

const SongController = {
	index: function(req, res, next) {

		Song.findAll().then(function(songs) {
			res.status(200)
        .json({
          status: 'success',
          data: songs,
          message: 'Retrieved ALL songs'
        });
      })
			.catch(function (err) {
	      return next(err);
	    });

	},

	show: function(req, res, next) {
		let songID = parseInt(req.params.id);

		Song.findById(songID).then(function(song) {
			if (song) {
				res.status(200)
	        .json({
	          status: 'success',
	          data: song,
	          message: 'Retrieved ONE song'
	        });
			} else {
				res.status(404)
					.json({
						status: 'error',
	          data: song,
	          message: 'Song not found'
					})
			}
    }).catch(function (err) {
	      return next(err);
	    });
	}
};

export default SongController;