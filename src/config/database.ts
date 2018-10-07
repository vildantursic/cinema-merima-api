const mongoose = require('mongoose');

const options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

// local: mongodb://localhost/theater
// production: mongodb://<dbuser>:<dbpassword>@ds125423.mlab.com:25423/cinema-merima
mongoose.connect('mongodb://merima:test123@ds125423.mlab.com:25423/cinema-merima', options);

const db = mongoose.connection;
export default db;
