const User = require('../models/user.model');




const addBook = (req, res) => {
    User.updateOne({email: req.body.email},  {$push: {books: req.body.book}}, (err) => {
        if (err) {
            console.log("E");
        }
        res.send('user updated')
    });
}


const deleteBook = (req, res) => {
    let name = req.body.book.name;
    User.updateOne({email: req.body.email}, {"$pull": {"books": {"name": name}}}, (err) => {
        if (err) {
            console.log("E");
        }
        res.send('user updatejhjhd');
    });
}

const updateBook = (req, res) => {
    console.log(req.body);
    User.updateOne({email: req.body.email, "books.name": req.body.name}, {"$set": {"books.$.name": req.body.book.name, "books.$.status": req.body.book.status, "books.$.description": req.body.book.description}}, (err) => {
        if (err) {
            console.log("fqweqwe");
        }
        res.send("njjbjvjhvv");
    });
}


module.exports = {addBook, deleteBook, updateBook} 