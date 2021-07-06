'use strict';

const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const homeController = require('./controller/home.controller');
const bookController = require('./controller/book.controller');

const app = express();
app.use(cors());

const PORT = process.env.PORT


mongoose.connect('mongodb://localhost:27017/favBooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/books', bookController);
app.get('/', homeController);


app.listen(PORT, () => console.log(`listening on ${PORT}`));





