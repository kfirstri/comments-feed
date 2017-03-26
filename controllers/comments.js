const db = require('../resources/database.js');

var getAllComments = (req, res) => {
  db.get().collection('comments').find().toArray().then(results => {
    return res.json(results);
  })
  .catch(err => {
    return res.send('err - ' + err);
  })
}

var saveNewComment = (req, res) => {
  if (!req.body.email || !req.body.text) {
    return res.send('you must send email and a message.');
  }

  var comment = {
    'email' : req.body.email,
    'text' : req.body.text
  };

  db.get().collection('comments').insertOne(comment).then(result => {
    return res.json({'result': 'saved comments'}); 
  })
  .catch(err => {
    return res.json({'error': err});
  });
}

module.exports = { getAllComments, saveNewComment };