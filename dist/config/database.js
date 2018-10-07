"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const options = {
    useMongoClient: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};
// local: mongodb://localhost/theater
// production: mongodb://<dbuser>:<dbpassword>@ds125423.mlab.com:25423/cinema-merima
mongoose.connect('mongodb://merima:test123@ds125423.mlab.com:25423/cinema-merima', options);
const db = mongoose.connection;
exports.default = db;
//# sourceMappingURL=database.js.map