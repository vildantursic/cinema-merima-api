"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./config/database"));
const app = express_1.default();
database_1.default.on('error', console.error.bind(console, 'connection error:'));
database_1.default.once('open', function () {
    console.log('connected to DB');
});
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
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
app.listen(2222, () => console.log('W-API listening on port 2222!'));
//# sourceMappingURL=app.js.map