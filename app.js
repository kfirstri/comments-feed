const express = require('express');
const app = express();

// controllers
var commentsController = require('./controllers/comments');

// handle static files
app.use(express.static('public'));

// create comment HTTP endpoints
app.get('/comments', commentsController.getAllComments);
app.post('/comments', commentsController.saveNewComment);

// start server
app.listen(1337, () => {
  console.log('server started at http://localhost:1337');
});
