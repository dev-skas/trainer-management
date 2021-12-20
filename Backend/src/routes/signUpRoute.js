const express = require('express');
const multer = require('multer');
const signUpModel = require('../model/signupModel');
let app =express.Router();

const DIR = '../Frontend/src/assets/uploads';
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,DIR);
    },
    filename:(req,file,cb)=>{
        const fileName = file.originalname.toLocaleLowerCase().split(' ').join('-');
        cb(null,fileName);
    }
});
var upload = multer({
    storage:storage,
    limits:{
        fileSize:1024 * 1024 * 5
    },
    // fileFilter:(req, file, cb)=>{
    //     if(file.mimetype == "image/png" || file.mimetype == "image/jpp" || file.mimetype == "image/jpeg"){
    //         cb(null,true);
    //     } else{
    //         cb(null,false);
    //         return cb(new Error('Only .png, .jpg and .jpeg format allowed'));
    //     }
    // }
});


app.post('/registerTrainer',upload.single('img'),async(req,res)=>{
    let file = req.file;
    // Testing By Console.log
    console.log(file.filename);
    console.log(req.body); 
     // Generating Unique ID:
        var UniqueID = function(){

        return 'ICT' + Math.random().toString(36).substring(2,8)
        }
        let Unique_ID = UniqueID();

        var trainer = signUpModel({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address,
            h_qualification:req.body.h_qualification,
            skillSet:req.body.skillSet,
            company_name:req.body.company_name,
            designation:req.body.designation,
            courses:req.body.courses,
            img:req.file.filename,
            password:req.body.password,
            re_password:req.body.re_password,
            isApproved:false,
            isAllocated:false,
            employmentType:'',
            Unique_ID:Unique_ID
        });
    try{
        trainer = await trainer.save();
        res.send()
    }
    catch(err){
        console.error("Error from Backend = "+err);
    }
})
module.exports = app