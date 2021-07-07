'use strict';
const mongoose = require('mongoose');
const bookModel = require('./books.model')

const userSchema = new mongoose.Schema({
    email: { type: String },
    book: [bookModel]
});

// this is like a class
const userModel = mongoose.model('user', userSchema)


// const gameOfThrons = ({
//     name: 'A Dance with Dragons ',
//     description: " George R. R. Martin.",
//     status: 'active'
// })

// const feLawsOfpower = ({
//     name: '48 laws of power',
//     description: "authored by robet",
//     status: 'active'
// })

// const mySystem = ({
//     name: 'database',
//     description: "authored by nawras",
//     status: 'active'
// })


// const thaer = new userModel({
//     email: "thaerbraizat13@gmail.com",
//     books: [gameOfThrons, mySystem, feLawsOfpower]

// });

// const seedUser = () => {
//     thaer.save();

//     return (thaer)
// }

const seedUserData = () => {
    const newUser = new userModel({
        email: 'v.salvatore7.gs@gmail.com',
        cats: [bookModel]
   
    });
    console.log(newUser);
    newUser.save();
}
module.exports = {
    userModel,
    seedUserData
}




