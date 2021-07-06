'use strict';
// const seedUser =require('../models/user.model');
const homeController = (req, res) => {
    // const userObject= seedUser();
    res.json(userObject);
};

module.exports = homeController;