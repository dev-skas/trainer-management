const mongoose = require('mongoose');
const Schema =mongoose.Schema;
// The below variable contains the MONGO URI string
MongoURI = "mongodb+srv://userOne:1234@cluster0.7thas.mongodb.net/TrainersManagementSystem?retryWrites=true&w=majority";
mongoose.connect(MongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("MongoDB Connected Successfully");})
.catch(err=>{console.log("Error from MongoDB: "+err);})   // Error Handling for MongoDB

// Schema creation:

const TrainerSchema = new Schema({
    // SIGN UP:
    name:String,
    email:String,
    phone:String,
    address:String,
    h_qualification:String,  //higher qualification
    skillSet:String,
    company_name:String,
    designation:String,
    courses:String,
    img:String,
    password:String,
    re_password:String,
    isApproved:Boolean,
    isAllocated:Boolean,
    Unique_ID:String,
    // ALLOCATION FORM:
    courseid:String,
    emptype:String,  //employment type
    batchid:String,
    scheduletime:String,
    startdate:String,
    enddate:String,
    venue:String,    
});
const trainerData = mongoose.model('trainerData',TrainerSchema);
module.exports = trainerData;