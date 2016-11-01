const Sequelize = require('sequelize');
const connectionString = 'postgres://localhost:5432/tswift';

const client = new Sequelize(connectionString);

// client.connect(function(err) {
// 	if (err) throw err;

// 	client.query(
// 	  'CREATE TABLE IF NOT EXISTS songs(\
// 	  	id SERIAL PRIMARY KEY, \
// 	  	name VARCHAR(40) not null, \
// 	  	album VARCHAR(40) not null\
// 	  )'
// 	);

// 	console.log("created tables");

// 	client.query(
// 		'SELECT * FROM songs',
// 		function(error, result) {
// 			console.log(result.rows);

// 			client.end(function(err) {
// 				if (err) throw err;
// 			})
// 		}
// 	);

// });

client.authenticate()
	.then(function(err) {
		if (err) throw err;
		console.log("success");
	})
	.catch(function(err) {
		console.log("some kind of problem i guess");
	})

const Song = client.define('song', {
	name: {
		type: Sequelize.STRING
	},
	album: {
		type: Sequelize.STRING
	}	
});

Song.sync({force: true}).then(function() {
	return Song.create({
    name: 'John',
    album: 'Hancock'
  });
});

Song.findAll().then(function(songs) {
  console.log(songs)
});