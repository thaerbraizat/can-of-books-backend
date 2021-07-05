'use strict';

const mongoose = require("mongoose");
const bookSchema = require("./bookSchema");

const userSch = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema],
});
const userMod = mongoose.model('user', userSch);
const userData = () => {
    const userNew = new userMod({
        email: 'nedal.r.alashqar@gmail.com',
        books: [
            { name: 'RUN', description: 'Horror', status: 'Used' },
            { name: 'YES DAY', description: 'Comedy', status: 'New' },
            { name: 'OUT SIDE WIRE', description: 'Action', status: 'Used' },
        ],
    });
    userNew.save();
};
userData();
module.exports = userMod;