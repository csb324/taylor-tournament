'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tournament = sequelize.define('Tournament', {
    isComplete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Tournament.hasMany(models.Round);
      }
    }
  });


  return Tournament;
};

