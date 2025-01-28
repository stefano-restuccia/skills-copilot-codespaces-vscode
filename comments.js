// Create web server
// Run server
// Request: localhost:3000/comments
// Response: JSON of comments
// Request: localhost:3000/comments/1
// Response: JSON of comments with id 1
// Request: localhost:3000/comments/2
// Response: JSON of comments with id 2

var express = require('express');
var app = express();

var comments = [
  { id: 1, author: 'John', text: 'Hello World' },
  { id: 2, author: 'Jane', text: 'Hi, planet!' },
  { id: 3, author: 'Joe', text: 'Hi, planet!' }
];

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.get('/comments/:id', function(req, res) {
  var id = req.params.id;
  var comment = comments.find(function(comment) {
    return comment.id == id;
  });
  res.json(comment);
});

app.listen(3000);
console.log('Server is running on http://localhost:3000');
