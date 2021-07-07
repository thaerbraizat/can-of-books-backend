const users =require('../models/user.model');

let getData = (req,res)=>{
    console.log(req.query.email);
    users.find({email:req.query.email},(err,users)=>{

        if (err){
            console.log(err);
        }
        // console.log(users);
        // const booksObject=users[0].books.toObject();
       
        // const arr =JSON.stringify(users)
        // console.log(arr[0].books);
        res.json(users)
        console.log(users);
    })

}
module.exports=getData;