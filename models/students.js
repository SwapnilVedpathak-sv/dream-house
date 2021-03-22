const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
   paidBy:String,
   toWhom:String,
   date:String,
   amount:Number,
   description:String
})

// New Collection

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;
