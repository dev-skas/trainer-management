const express = require('express');
const app = new express();
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 3000;
const trainerData = require('./src/model/signupModel');  // This is the model containing trainer sign up data


// app. use starts here:
app.use(express.json()) //This is instead of using body parser
app.use(express.urlencoded({ extended: true }));
// app.use('/public',express.static('./public'))
app.use(cors());

const signUpRouter = require('./src/routes/signUpRoute');
app.post('/registerTrainer',signUpRouter);
const loginRouter = require('./src/routes/loginRoute')
app.post('/login',loginRouter)

app.listen(port,()=>{console.log("Server ready at "+port);})