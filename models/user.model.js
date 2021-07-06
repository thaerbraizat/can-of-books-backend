'use strict';
const mongoose=require('mongoose');
const booksSchema=require('./books.model')

const userSchema=new mongoose.Schema({
    email : {type:String},
    book :[booksSchema]
});

// this is like a class
const userModel=mongoose.model('user',userSchema)


const seedUser=()=>{
    const feLawsOfpower=({
        name:'48 laws of power',
        description:"authored by robet",
        status:'active' 
    })
    const mySystem=({
        name:'48 laws of power',
        description:"authored by robet",
        status:'active' 
    })
    const gameOfThrons=({
        name:'48 laws of power',
        description:"authored by robet",
        status:'active' 
    })
    
    const thaer =new userModel({
        email:"thaerbraizat13@gmail.com",
        books:[gameOfThrons,mySystem,feLawsOfpower]
    });

    thaer.save();

    
return(thaer)
}
module.exports=userModel; 




