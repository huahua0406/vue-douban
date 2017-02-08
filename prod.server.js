var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
	req.url = '/index.html';
	next();
});

app.use(router);


var bookData = require('./src/json/book.json');
var homeData = require('./src/json/home.json');
var movieData = require('./src/json/movie.json');
var radioData = require('./src/json/radio.json');
var teamData = require('./src/json/team.json');


var apiRoutes = express.Router();

apiRoutes.get('/home', function (req, res) {
  res.json({
    errno: 0,
    data: homeData
  });
});
apiRoutes.get('/book', function (req, res) {
  res.json({
    errno: 0,
    data: bookData
  });
});
apiRoutes.get('/movie', function (req, res) {
  res.json({
    errno: 0,
    data: movieData
  });
});
apiRoutes.get('/radio', function (req, res) {
  res.json({
    errno: 0,
    data: radioData
  });
});
apiRoutes.get('/team', function (req, res) {
  res.json({
    errno: 0,
    data: teamData
  });
});


app.use('/api', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + port + '\n')
});