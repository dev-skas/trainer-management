const express = require('express');
const signUpModel = require('../model/signupModel');
let app =express.Router();

app.post('/login',(req,res)=>{
    let userDetails = req.body;
    console.log(req.body)
    let adminEmail = 'admin@gmail.com';
    let adminPass = '1234';
    if(userDetails.email == adminEmail && userDetails.password == adminPass){
        console.log("Admin logged in");
    } else {
        signUpModel.findOne({email:userDetails.email,pass:userDetails.password},(err,trainer)=>{
            if(err){
                res.status(401).send("Something went wrong.")
            }
            else if(!trainer){
                res.status(401).send("Invalid User Details/ User doesnt exist")
            }
            else if(trainer){

                console.log("Trainer logged In");
            }
            else{
                console.log("Login Failed");
                res.send()
            }
        })
    }
})

module.exports = app;