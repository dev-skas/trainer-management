const express = require('express');
const jwt = require('jsonwebtoken')
const signUpModel = require('../model/signupModel');
let app =express.Router();

app.post('api/login',(req,res)=>{
    let userDetails = req.body;
    console.log(req.body)
    let adminEmail = 'admin@gmail.com';
    let adminPass = '1234';
    if (userDetails.email == adminEmail && userDetails.password == adminPass) {
        let payload = {subject:adminEmail+adminPass}
        let tokenAdmin = jwt.sign(payload,'SECRET-KEY');
        res.status(200).send({ role: "admin", msg: "Admin logged In", tokenAdmin})
        
    } else {
        signUpModel.findOne({email:userDetails.email,password:userDetails.password,isApproved:"true" },(err,trainer)=>{
            if(err){
                res.status(401).send("Something went wrong. Please wait for approval")
            }
            else if(!trainer){
                res.status(401).send("Invalid User Details/ User doesnt exist")
            }
            else if (trainer) {
                let userPayload = {subject:userDetails.email+userDetails.pass}
                let tokenUser = jwt.sign(userPayload,"SECRET-KEY")
                console.log(trainer)
                res.status(200).send({role:"user",msg:"Trainer logged In",id:trainer._id, tokenUser})
               
            }
            else{
                res.status(401).send("Login Failed")

            }
        })
    }
})

module.exports = app
