const express = require('express');
const app = new express();
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;
const trainerData = require('./src/model/signupModel');  // This is the model containing trainer sign up data
const allocationData = require('./src/model/allocationModel');
// MULTER:
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
function verifyToken(req,res,next){
  if(!req.headers.authorization){
      return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  // console.log("tokenHEADER"+token);
  if(token=='null'){
      return res.status(401).send('Unauthorized req')
  }
  try {
    let payload = jwt.verify(token,'SECRET-KEY');
    req.userId = payload.subject
  } catch (err) {
    console.error("INVALID TOKEN SECRET KEY");
    return res.status(401).send("Unauthorized request. Only access to authorized entry");
  }
  next();
}
// app. use starts here:
app.use(express.json()) //This is instead of using body parser
app.use(express.urlencoded({ extended: true }));
// app.use('/public',express.static('./public'))
app.use(cors());

const signUpRouter = require('./src/routes/signUpRoute');
app.post('/registerTrainer',signUpRouter);
const loginRouter = require('./src/routes/loginRoute')
app.post('/login', loginRouter)

// TO BE APPROVED LIST
app.get('/trainers',verifyToken,function(req,res){      //getting trainers details
    trainerData.find({ isApproved:"false"})
    .then(function(trainers){
      console.log("success")
        res.send(trainers);

    });
});

//GETS TRAINERS DETAILS FOR TRAINER LIST IN SEARCH & ALLOCATE PAGE 
app.get('/trainerdtl',verifyToken,function(req,res){      //getting trainers details
    trainerData.find({ isAllocated: "false" ,isApproved:"true"  })
    .then(function(trainers){
      console.log("success")
        res.send(trainers);

    });
});

// TO APPROVE
app.put('/approve',verifyToken,(req,res)=>{   //aprrove trainers
    console.log(req.body)
   let id=req.body._id;
    emptype=req.body.emptype;
    console.log(emptype);


    trainerData.findByIdAndUpdate({"_id":id},{$set:{
        "isApproved":"true",
        "emptype":emptype
      }})
      .then(function(){
        res.send()
        approvemail(id)
      })
})
      
// RETRIEVES THE TRAINER DETAIL TO DISPLAY INTO ALLOCATION FORM
      app.get('/:id',(req,res)=>{
        const id=req.params.id;
        console.log(id)
            trainerData.findOne({"_id":id})
            .then((trainer)=>{
                res.send(trainer);
            })
        
      
      });


  // INVOKED ON ALLOCATE BTN TO SAVE THE ALLOCATION DATAS INTO DB
    app.post('/allocate',verifyToken,function(req,res){     //allocate trainers
      console.log(req.file);
      let id=req.body._id;
      var allocationDetails = allocationData({
        Unique_ID:req.body.Unique_ID,
        name:req.body.name,
        courseid:req.body.courseid,
        courses:req.body.courses,
        skillSet:req.body.skillSet,
        batchid:req.body.batchid,
        scheduletime:req.body.scheduletime,
        startdate:req.body.startdate,
        enddate:req.body.enddate,
        venue:req.body.venue
      })
      try{
        allocationDetails = allocationDetails.save();
        res.send();
        allocatemail(id);
      }
      catch(err){
        console.error("Error from Backend(Allocate) = "+err);
      }
 
    });
// GET ALL ALLOCATION DETAILS OF SPECIFIED TRAINER
    app.get('/allocationDetails/:id',(req,res)=>{
      let Unique_ID = req.params.id;
      res.header("Access-Control-Allow-Origin","*");
      res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');

      allocationData.find({"Unique_ID":Unique_ID})
      .then((allocateData)=>{
        res.send(allocateData)
      })
    })

// REJECT TRAINER API
        app.delete('/reject/:id',(req,res)=>{
            id=req.params.id;
         console.log(id);
            trainerData.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log("success delete");
            res.send();
        })
    })

// trainer profile
// GETS THE TRAINER'S PROFILE WITH MENTIONED ID
app.get('/profile/:id',verifyToken,function(req,res){
    const id= req.params.id;
    
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    trainerData.findOne({"_id":id})
    
          .then(function(trainerData){
              // console.log("Profile = "+trainerData);
              res.send(trainerData);
          });
});

// EDIT TRAINER PROFILE
app.put('/editprofile', verifyToken, upload.single('img'), (req, res) => {
  // Here imgFile will store the image file from file input if its selected OR
  // If no file was selected in edit profile page then just keep the same file name from db which is previously stored during sign up
  let imgFile = req.file;
  if (imgFile) {
    imgFile = imgFile.filename;
  } else {
    // keep the image saved during signup
    imgFile = req.body.dbImage
  }

  id = req.body._id,
    trainerName = req.body.name,
    email = req.body.email,
    phone = req.body.phone,
    address = req.body.address,
    h_qualification = req.body.h_qualification,
    skillSet = req.body.skillSet,
    company_name = req.body.company_name,
    designation = req.body.designation,
    img = imgFile

  trainerData.findByIdAndUpdate({ _id: id },
    {
      $set: {
        "name": trainerName,
        "email": email,
        "phone": phone,
        "address": address,
        "h_qualification": h_qualification,
        "skillSet": skillSet,
        "company_name": company_name,
        "designation": designation,
        "img": img
      }
    })
    .then(() => {
      res.send();
    })
  
  // app.post('/editprofile',function(req,res){
  //     res.header("Access-Control-Allow-Origin","*");
  //     res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
  //     console.log(req.body);


  //     var trainerData ={
  //         _id : req.body.trainerData._id,
  //         name : req.body.trainerData.name,
  //         email : req.body.trainerData.email,
  //         phone : req.body.trainerData.phone,
  //         address : req.body.trainerData.address,
  //         h_qualification : req.body.trainerData.h_qualification,
  //         skillSet : req.body.trainerData.skillSet,
  //         company_name : req.body.trainerData.company_name,
  //         designation : req.body.trainerData.designation,
  //         courses : req.body.trainerData.courses,
  //         img : req.body.trainerData.img
       
    
  //     }


});


//sendemial

function approvemail(id){

    trainerData.findOne({"_id":id})
      
  
   .then((profile)=>{
  
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: 'mydiwaliwishes@gmail.com',
             pass: 'dpdgqqutqnmqatez'
         }
     })
    
    
    var mailOptions = {
      from: 'alan.bayer49@ethereal.email',
      to: profile.email,
      subject: 'Account Approved -'+ profile.name,
      html:`<h2>welcome - ${profile.name}</h2>
      
      <p>Hi <b>${profile.name}</b> ,your account for ict accademy trainer is approved by admin.check your profile using below credintials</p>
      
      <table  style="border: 1px solid #333;  width: 100%;" >
        <tr>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">ICTAK ID</th>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">${profile.Unique_ID}</th>   
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;background-color: yellow;">Email</td>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;background-color: yellow;">${profile.email}</td>  
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;background-color: yellow;">Password</td>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;background-color: yellow;">${profile.password}</td>    
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">Employment Type</td>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">${profile.emptype}</td>    
        </tr>
        
      </table>`
  
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
                      
      } else {       
  
      }
    });
   
   });
  }


  function allocatemail(id){

    trainerData.findOne({"_id":id})
      
  
   .then((profile)=>{
  
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: 'mydiwaliwishes@gmail.com',
             pass: 'dpdgqqutqnmqatez'
         }
     })
    
    
    var mailOptions = {
      from: 'alan.bayer49@ethereal.email',
      to: profile.email,
      subject: 'Course For -'+ profile.name,
      html:`<h2>New Course Added </h2>
      
      <p>Hi <b>${profile.name}</b>, New Course is allocated in your profile Please login to your account and check the details.Important data related to course is included below</p>
      
      <table  style="border: 1px solid #333;  width: 100%;" >
        <tr>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">Batch Id</th>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">${profile.batchid}</th>   
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">Course Id</td>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">${profile.courseid}</td>  
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">Start Date</td>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">${profile.startdate}</td>    
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">End Date</td>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">${profile.enddate}</td>    
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">Schedule time</td>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">${profile.scheduletime}</td>    
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">venue</td>
          <td style="border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;">${profile.venue}</td>    
        </tr>
        
      </table>`
  
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
                      
      } else {       
  
      }
    });
   
   });
  }

app.listen(port,()=>{console.log("Server ready at "+port);})