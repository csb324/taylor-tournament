const models = require('../models');
const songs = require('../seeders/songs');

models.sequelize.sync({ force: true }).then(function() {
	songs.up(
		models.sequelize.getQueryInterface(), 
		models.sequelize
	).then(function() {

		console.log("done!");
		return true;

	});
});

