// var express = require('express');
// var router = express.Router();

import express from 'express';
import models from './models';
import buildController from './controllers/genericController';

const songController = buildController(models.Song, "song");
const gameController = buildController(models.Game, "game");


const router = express.Router();

router.get('/songs', songController.index);
router.get('/songs/:id', songController.show);
router.post('/songs', songController.create);

// router.put('/songs/:id', db.updateSong);
// router.delete('/songs/:id', db.removeSong);

router.get('/games', gameController.index);
router.get('/games/:id', gameController.show);

router.post('/games', gameController.create);

export default router;
