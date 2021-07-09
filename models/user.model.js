'use strict';
const mongoose = require('mongoose');


const booksSchema=new mongoose.Schema({
    name : {type:String},
    description : {type:String},
    status : {type:String}
});

const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [booksSchema]
});


const user = mongoose.model('user', userSchema);






const thaer = new user({

    email: 'thaerbraizat13@gmail.com',
    books: [{
        name: 'A Dance with Dragons',
        description: 'George R. R. Martin.',
        status: 'active'
    },
    {
        name: '48 laws of power',
        description: 'authored by robet',
        status: 'active'
    },
    {
        name: 'database',
        description: 'authored by nawras',
        status: 'active'
    }
    ]
});



const seedUser = () => {
   thaer.save();

    return (thaer)
}



module.exports = user;









  












