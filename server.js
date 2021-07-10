'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');

const mongoose = require('mongoose');
const app = express();
const homeController = require('./controllers/home.controller');
const User = require('./models/user.model');
const {getUser, deleteUser, addUser} = require('./controllers/user.controller');

const {
    addBook,
    deleteBook,
    updateBook
} = require('./controllers/book.controller');

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

 mongoose.connect('mongodb+srv://thaer:thaer12345@cluster0.tydth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });
    let db = mongoose.connection;

 
app.get('/', homeController);

app.get('/user', getUser);

app.post('/user', addUser);

app.delete('/user', deleteUser);

app.post('/book', addBook);

app.delete('/book', deleteBook);

app.put('/book', updateBook);



// app.get('/book', bookController);



// app.post('/create-book', createBook);
// app.put('/update-book/:book_id', updateBook);
// app.delete('/delete-book/:book_id', deleteBook);



app.listen(port, () => console.log(`listening on ${port}`));























// const client = jwksClient({

//   jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
// });


// const getKey = (header, callback) => {
//   client.getSigningKey(header.kid, function (err, key) {
//     const signingKey = key.publicKey || key.rsaPublicKey;
//     callback(null, signingKey);
//   }); 
// }
// app.get('/', (req, res) =>{
//   console.log(client);

// } );

// app.get('/test', (req, res) => {
//   console.log(req.headers.authorization);

//   const token = req.headers.authorization.split(' ')[1];
//   jwt.verify(token, getKey, {}, (err, user) => {
//     if (err) {
//       res.send('invalid token');
//     }
//     res.send(user)
//   })
//   res.send(token)
// });















