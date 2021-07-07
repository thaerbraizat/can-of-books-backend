
const seedUser =require('../models/user.model')
const homeController = (req,res) =>{
seedUser();
res.send("iam here!");


//  const userObject=seedUser();
//  res.json(userObject)

//  console.log(userObject);
}

module.exports=homeController;