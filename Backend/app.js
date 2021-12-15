const express = require('express');
const app = new express();
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 3000;
const trainerData = require('./src/model/signupModel');  // This is the model containing trainer sign up data


// app. use starts here:
app.use(express.json()) //This is instead of using body parser
app.use(cors());

// trainer profile

app.get('/profile/:id',function(req,res){
    const id= req.params.id;
    
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    TrainerSchema.findOne({"_id":id})
    
          .then(function(trainerData){
              console.log(trainerData);
              res.send(trainerData);
          });
});

// to edit trainer profile

app.post('/editprofile',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);

    var trainerData ={
        _id : req.body.trainerData._id,
        name : req.body.trainerData.name,
        email : req.body.trainerData.email,
        phone : req.body.trainerData.phone,
        address : req.body.trainerData.address,
        h_qualification : req.body.trainerData.h_qualification,
        skillSet : req.body.trainerData.skillSet,
        company_name : req.body.trainerData.company_name,
        designation : req.body.trainerData.designation,
        courses : req.body.trainerData.courses,
        img : req.body.trainerData.img
       
    
    }
console.log("Data got in server in edit " +trainerData._id);
trainerData.updateOne(
    {_id:req.body.trainerData._id},{$set:trainerData},
     function(err,res){
     if(err){
         console.log(err)
        }
    }
     )
     
});
app.listen(port,()=>{console.log("Server ready at "+port);})