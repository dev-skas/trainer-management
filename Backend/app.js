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


app.listen(port,()=>{console.log("Server ready at "+port);})