// const Server = require('./server');
const path = require('path');
const express = require('express');
const cors = require('express-cors');
var bodyParser = require('body-parser')
const port = (process.env.PORT || 3000);
const app = express();
const router = require('./router');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.use('/assets', express.static(path.join(__dirname, '../app/assets')));

app.get('/', function (req, res) { res.sendFile(path.join(__dirname, '/../index.html')) });

app.use('/api', router);
app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, '/../index.html')) });

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
