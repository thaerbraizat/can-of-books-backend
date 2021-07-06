"use strict";

const userModel = require("../models/user");
const booksController = (req, res) => {
    const searchQuery = req.query.email;
    userModel.findOne({email:searchQuery},(err,user)=>{
        if (err) {
            res.send(err.message)
        } else {
            res.json(user.books)
        }
    });
};
module.exports = booksController;
