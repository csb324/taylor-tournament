'use strict';
module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define('Game', {
    isComplete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Game.belongsToMany(models.Song, { through: 'GameSongs' });
        Game.belongsTo(models.Song, { as: 'winner' } );
      }
    }
  });
  return Game;
};