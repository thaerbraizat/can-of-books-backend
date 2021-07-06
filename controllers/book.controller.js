'use strict';
const userModel =require('../models/user.model')
const bookController=(req,res)=>{
    const searchQuery=req.query.email;
    console.log(userModel);
    userModel.find({email: searchQuery},(err,user)=>{

        if(err){
            res.send("not found")
        }
            res.send(user.books)
        
    })
}

module.exports=bookController