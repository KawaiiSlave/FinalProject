/*requiring module, setting a variable, and creating a 
new model. Exporting it*/


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;