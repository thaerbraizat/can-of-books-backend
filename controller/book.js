"use strict";

const userMod = require("../models/user");
const book = (req, res) => {
    const { email } = req.query;
    userMod.find({email:email},(error,user)=>{
        if (error) {
            res.send(error);
        } else {
            res.json(user);
        }
    });
};
module.exports = book;
