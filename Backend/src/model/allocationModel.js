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
const AllocationSchema = new Schema({
    Unique_ID:String,
    name:String,
    courses:String,
    courseid:String,
    emptype:String,
    batchid:String,
    scheduletime:String,
    startdate:String,
    enddate:String,
    venue:String,
    isAllocated:Boolean,

});
const allocationData = mongoose.model('allocationData',AllocationSchema);
module.exports = allocationData;