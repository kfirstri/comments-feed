const db = require('../database.js');

var getAllComments = (req, res) => {
  db.get().collection('comments').find().toArray().then(results => {
    return res.json(results);
  })
  .catch(err => {
    return res.send('err - ' + err);
  })
}

var saveNewComment = (req, res) => {
  console.log('save new comment');

  var comment = {
    'email' : 'k@k.com',
    'text' : 'hello world'
  };

  db.get().collection('comments').insertOne(comment).then(result => {
    return res.send('saved comment'); 
  })
  .catch(err => {
    return res.send('err - ' + err);
  });
}

module.exports = { getAllComments, saveNewComment };