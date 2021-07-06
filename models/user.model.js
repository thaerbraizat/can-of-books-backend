'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./book.model');

const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema],
});
const userModel = mongoose.model('user', userSchema);

//     const feLawsOfpower={
//         name:'48 laws of power',
//         description:"authored by robet",
//         status:'active' 
//     }
//     const mySystem={
//         name:'48 laws of power',
//         description:"authored by robet",
//         status:'active' 
//     }
//     const gameOfThrons={
//         name:'48 laws of power',
//         description:"authored by robet",
//         status:'active' 
//     }
//     const seedUser=()=>{
//     const nedal =new userModel({
//         email:'nedal.r.alashqar@gmail.com',
//         books:[gameOfThrons,mySystem,feLawsOfpower]
//     });
//     nedal.save();

//     return(nedal)
// }
module.exports = userModel;