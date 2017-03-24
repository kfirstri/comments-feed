const mongo = require('mongodb').MongoClient;

const dbPath = 'mongodb://localhost:27017/comments';

var dbConnection;

mongo.connect(dbPath).then(db => {
  console.log('connected to db.');
  dbConnection = db;
})
.catch(err => {
  console.log('could not connect to db - ' + err);
});

module.exports.get = () => {
  return dbConnection;
};



