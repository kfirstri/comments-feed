var getAllComments = (req, res) => {
  console.log('get all comments');
  return res.send("Hello all comments");
}

var saveNewComment = (req, res) => {
  console.log('save new comment');
  return res.send("saved all comments");
}

module.exports = { getAllComments, saveNewComment };