const { stringify } = require("@angular/compiler/src/util");
const mongoose = require("mongoose");
const validator = require("validator");
const expencesSchema = new mongoose.Schema({
  moneyPaidBy:String,
  toWhomMoneyPaid:String,
  totalAmount:Number,
  paidAmount:Number,
  pendingAmount:Number,
  category:String,
  billDate:String,
  imageData:String
})

// New Collection

const Expences = new mongoose.model('Expences', expencesSchema);

module.exports = Expences;
