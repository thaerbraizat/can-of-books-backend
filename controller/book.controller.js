"use strict";

const userModel = require("../models/user");
const booksController = (req, res) => {
    let searchQuery = req.query.email;
    userModel.findOne({email:searchQuery},(error,user)=>{
    
        if (error) {
            res.send(error.message)
        }  
            res.json(user.books)
        
    });
}
module.exports = booksController;
