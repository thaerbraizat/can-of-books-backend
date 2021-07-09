const User = require('../models/user.model');




const getUser = (req, res) => {
    User.find({email: req.query.email}, (err, users) => {
        if (err) {
            console.log('ERROOOORRROROROOR');
        }
        console.log(users);
        res.json(users);
    });
}


const deleteUser = (req, res) => {
    User.deleteOne({email: req.query.email}, (err) => {
        if (err){
            console.log('ERERERERRERERERRERER');
        }
        res.send('all deleted');
    });
}


const addUser = (req, res) => {
    let user = new User();
    user.email = req.body.email;
    user.books = [];
    console.log('rrrr');
    console.log(req.body.email);
    user.save((err) => {
        if (err) {
            console.log("ERRRRERE");
        }
        res.send('new user added');
    });
}

module.exports = {getUser, deleteUser, addUser} 