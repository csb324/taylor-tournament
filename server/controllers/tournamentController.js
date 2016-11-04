import models from '../models';
import Promise from 'bluebird';

const Tournament = models.Tournament;
const Round = models.Round;
const Game = models.Game;
const Song = models.Song;


Tournament.createFromSongs = function(request) {
  let songIds = request.songs;

  if (songIds.length != 64) {
    songIds = songIds.splice(0, 64);
  }
  console.log("creating tournament from songs");


  return Tournament.create().then((newTournament) => {
    return Round.createFromSongs(songIds).then((round) => {

      console.log("created round");

      return newTournament.addRound(round).then(() => {

        console.log("saved the round");
        console.log("now to save the tournament....");
        return newTournament.save();

      });
    });


  }).catch((error) => {    
    console.log("error");
    return;
  });

}


Round.createFromSongs = function(songs) {
  let songPairs = [];
  for (var i = 0; i < songs.length; i+=2) {
    let songPair = [songs[i], songs[i+1]];
    songPairs.push(songPair);
  }

  return Round.create().then((newRound) => {
    // let promises = [];

    return Promise.map(songPairs, (pair) => {
      return Game.createFromSongs(songPairs[0], songPairs[1]).then((game) => {
        return game.setRound(newRound);
      }).then((game) => {
        return game.save();
      });
    }).then(() => {
      return newRound.save();
    });

  }).catch((error) => {
    console.log(error);
    return error;
  });

}

Game.createFromSongs = function(song1, song2) {

  return Game.create().then((game) => {
    return game.addSong(song1).then(() => {
      return game.addSong(song2);
    }).then(() => {
      return game.save();
    });
  });
}

const getGames = function(tournament) {
  const foundGames = Promise.map(tournament.getRounds(), function(round) {
    return round.getGames();
  }).then((arrayOfArrays) => {
    return arrayOfArrays.reduce((a, b) => {
      return a.concat(b);
    }, []).map((game) => {
      return Game.findById(game.id, { include: Song });
    });    
  });

  return Promise.all(foundGames);
}


const specialController = {

	create: function(req, res, next) {
    if (!req.body) return res.sendStatus(400);

		console.log(req.body);

    Tournament.createFromSongs(req.body).then(function(newItem) {

      // console.log(newItem);

      if (newItem) {

        Promise.join(newItem.getRounds(), getGames(newItem), (rounds, games) => {
          res.status(200)
            .json({
              status: 'success',
              data: {
                tournament: newItem,
                rounds: rounds,
                games: games
              },
              message: 'Created one tournament' 
            });          
        });

      } else {
        res.status(500)
          .json({
            status: 'error',
            message: 'problem creating the tournament'
          });
      }
    }).catch(function(err) {
      console.log(err);
      return next(err);
    });
  },

  index: function(req, res, next) {
    Tournament.findAll().then(function(response) {
      res.status(200)
        .json({
          status: 'success',
          data: response,
          message: 'Retrieved ALL tournaments'
        });
      })
      .catch(function (err) {
        return next(err);
      });
  }
}

export default specialController;



