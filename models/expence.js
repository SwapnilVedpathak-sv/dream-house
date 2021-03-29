const mongoose = require("mongoose");
const validator = require("validator");
const expencesSchema = new mongoose.Schema({
   paidBy:String,
   toWhom:String,
   date:String,
   amount:Number,
   description:String,
   imgUrl:String
})

// New Collection

const Expences = new mongoose.model('Expences', expencesSchema);

module.exports = Expences;
