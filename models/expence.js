const mongoose = require("mongoose");
const validator = require("validator");
const expencesSchema = new mongoose.Schema({
  moneyPaidBy:String,
  toWhomMoneyPaid:String,
  totalAmount:Number,
  paidAmount:Number,
  pendingAmount:Number,
  category:String,
  datePicker:Object,
  formatedDate:Object
})

// New Collection

const Expences = new mongoose.model('Expences', expencesSchema);

module.exports = Expences;
