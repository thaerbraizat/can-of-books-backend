'use strict';

const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    status: { type: String },
});
// const bookModel=mongoose.model('books' , bookSchema)
module.exports = bookSchema;