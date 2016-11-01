'use strict';
module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    album: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Song;
};