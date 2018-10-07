import express from 'express';
import bodyParser from 'body-parser';
import db from './config/database';

const app = express();
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to DB');
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * ROUTES
 */
const user = require('./routes/user/index');
const theater = require('./routes/theater/index');
const movie = require('./routes/movie/index');
const reservation = require('./routes/reservation/index');
const food = require('./routes/food/index');

app.use('/api/v1/', user);
app.use('/api/v1/', theater);
app.use('/api/v1/', movie);
app.use('/api/v1/', reservation);
app.use('/api/v1/', food);

app.listen(3000, () => console.log('W-API listening on port 3000!'));
