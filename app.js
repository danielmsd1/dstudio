const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('career');
});

app.listen(3000, function () {
	console.log('Server started in port 3000!');
});
