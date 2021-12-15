const express = require('express');
// const multer = require('multer');
const signUpModel = require('../model/signupModel');
let app =express.Router();

// const DIR = './public/uploads/images';
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,DIR);
//     },
//     filename:(req,file,cb)=>{
//         const fileName = file.originalname.toLocaleLowerCase().split(' ').join('-');
//         cb(null,fileName);
//     }
// });
// var upload = multer({
//     storage:storage,
//     limits:{
//         fileSize:1024 * 1024 * 5
//     },
//     fileFilter:(req, file, cb)=>{
//         if(file.mimetype == "image/png" || file.mimetype == "image/jpp" || file.mimetype == "image/jpeg"){
//             cb(null,true);
//         } else{
//             cb(null,false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed'));
//         }
//     }
// });


app.post('/registerTrainer',async(req,res)=>{
     // Generating Unique ID:
        var UniqueID = function(){
        return '_' + Math.random().toString(36).substring(2,8)
        }
        let Unique_ID = UniqueID();

    var trainer = signUpModel({
        name:req.body.trainer.name,
        email:req.body.trainer.email,
        phone:req.body.trainer.phone,
        address:req.body.trainer.address,
        h_qualification:req.body.trainer.h_qualification,
        skillSet:req.body.trainer.skillSet,
        company_name:req.body.trainer.company_name,
        designation:req.body.trainer.designation,
        courses:req.body.trainer.courses,
        img:req.body.trainer.img,
        password:req.body.trainer.password,
        re_password:req.body.trainer.re_password,
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