require('babel-register');

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

const models = require('./server/models');
const api = require('./server/routes').default;

app.use('/api', api);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

models.sequelize.sync().then(function() {
	app.listen(3000, 'localhost', (err) => {
	  if (err) {
	    console.log(err);
	    return;
	  }

	  console.log('Listening at http://localhost:3000');
	});
})
