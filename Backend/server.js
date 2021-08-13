const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const router=express.Router();
//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
router.get("/");
// let books = [];

// app.get('/home', function(req, res) {
//   console.log('Inside Home Login');
//   res.writeHead(200, {
//     'Content-Type': 'application/json',
//   });
//   console.log('Books : ', JSON.stringify(books));
//   res.end(JSON.stringify(books));
// });
// app.post('/create', function(req, res) {
//   const newBook = {
//     BookID: req.body.bookID,
//     Title: req.body.bookTitle,
//     Author: req.body.bookAuthor,
//   };

//   books.push(newBook);
//   console.log(books);
// });

//start your server on port 3000
app.listen(3000, () => {
  console.log('Server Listening on port 3000');
});
