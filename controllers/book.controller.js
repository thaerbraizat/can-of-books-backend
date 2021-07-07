const users = require('../models/user.model');

let bookController = (req, res) => {
    console.log(req.query.email);
    users.find({ email: req.query.email }, (err, users) => {

        if (err) {
            console.log(err);
        }
        res.json(users)
        console.log(users);
    })
}

const createBook = (req, res) => {
    const { userEmail, bookName } = req.body;
    users.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            res.send(error)
        }
        const newBook = { name: bookName }
        userData.book.push(newBook);
        userData.save();
        res.json(userData);

    })
}
const updateBook = (req, res) => {

    const bookIndex = req.params.book_id;
    const { userEmail, bookName } = req.body;
    users.findOne({ email: userEmail }, (error, userData) => {
        if (error) {
            res.send(error)
        } else {
            userData.book.splice(bookIndex, 1, { name: bookName });
            userData.save();
            res.send(userData.book);
        }
    });
}

const deleteBook = (req, res) => {

    const bookIndex = req.params.book_idx;
    const { email } = req.query;

    users.findOne({ email: email }, (error, userData) => {
        if (error) {
            res.send(error)
        } else {
            userData.book.splice(bookIndex, 1);
            userData.save();
            res.send(userData.book);

        }

    });
}

module.exports = {
    bookController,
    createBook,
    updateBook,
    deleteBook
}