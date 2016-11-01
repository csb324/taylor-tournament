var express = require('express');
var router = express.Router();

// var db = require('./queries');

var models = require('./models')

var songController = require('./controllers/songController');

router.get('/songs', songController.getAll);
// router.get('/songs/:id', db.getSingleSong);
// router.post('/songs', db.createSong);
// router.put('/songs/:id', db.updateSong);
// router.delete('/songs/:id', db.removeSong);


module.exports = router;