const mongoose = require('mongoose');
const Schema =mongoose.Schema;
// The below variable contains the MONGO URI string


// Schema creation:

const AllocationSchema = new Schema({
    Unique_ID:String,
    name:String,
    courses:String,
    skillSet:String,
    courseid:String,
    batchid:String,
    scheduletime:String,
    startdate:String,
    enddate:String,
    venue:String, 
    isAllocated:String   
});
const allocationData = mongoose.model('allocationData',AllocationSchema);
module.exports = allocationData;