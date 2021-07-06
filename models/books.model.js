'use strict';
const mongoose=require('mongoose');

const booksSchema=new mongoose.Schema({
    name : {type:String},
    description : {type:String},
    status : {type:String}
});

const bookModel=mongoose.model('books',booksSchema)

module.exports = booksSchema;