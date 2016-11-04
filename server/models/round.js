'use strict';
module.exports = function(sequelize, DataTypes) {
  var Round = sequelize.define('Round', {
    isComplete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Round.hasMany(models.Game);
      }
    }
  });
  return Round;
};
