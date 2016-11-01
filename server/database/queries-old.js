const promise = require('bluebird');
const options = {
	promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/tswift';

const db = pgp(connectionString);

function getAllSongs(req, res, next) {
  db.any('select * from songs')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL songs'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleSong(req, res, next) {
	var songID = parseInt(req.params.id);
	  db.one('select * from songs where id = $1', songID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE song'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createSong(req, res, next) {
  db.none(
  	'insert into songs(name, album) values(${name}, ${album})',
    req.body
  ).then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one song'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateSong(req, res, next) {
  db.none('update songs set name=$1, album=$2 where id=$3',
    [req.body.name, req.body.album, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated song'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeSong(req, res, next) {
  var songID = parseInt(req.params.id);
  db.result('delete from songs where id = $1', songID)
    .then(function (result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} songs`
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllSongs: getAllSongs,
  getSingleSong: getSingleSong,
  createSong: createSong,
  updateSong: updateSong,
  removeSong: removeSong
}