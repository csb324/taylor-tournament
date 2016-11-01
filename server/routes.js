// var express = require('express');
// var router = express.Router();

import express from 'express';
import models from './models';
import songController from './controllers/songController';

const router = express.Router();



router.get('/songs', songController.index);
router.get('/songs/:id', songController.show);
// router.get('/songs/:id', db.getSingleSong);
// router.post('/songs', db.createSong);
// router.put('/songs/:id', db.updateSong);
// router.delete('/songs/:id', db.removeSong);


export default router;