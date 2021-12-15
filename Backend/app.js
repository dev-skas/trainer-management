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
app.get('/trainers',function(req,res){      //getting trainers details
    trainerData.find()
    .then(function(trainers){
      console.log("success")
        res.send(trainers);

    });
});
app.put('/approve',(req,res)=>{   //aprrove trainers
    console.log(req.body)
    id=req.body._id;
    trainerData.findByIdAndUpdate({"_id":id},{$set:{
        "isApproved":"true"
      }})
      .then(function(){
        res.send()
      })
      })
      app.get('/:id',(req,res)=>{
        const id=req.params.id;
        console.log(id)
            trainerData.findOne({"_id":id})
            .then((trainer)=>{
                res.send(trainer);
            })
        
      
      })
app.listen(port,()=>{console.log("Server ready at "+port);})