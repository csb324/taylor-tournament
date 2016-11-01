var express = require('express');
var router = express.Router();

var db = require('./queries');


router.get('/songs', db.getAllSongs);
router.get('/songs/:id', db.getSingleSong);
router.post('/songs', db.createSong);
router.put('/songs/:id', db.updateSong);
router.delete('/songs/:id', db.removeSong);


module.exports = router;