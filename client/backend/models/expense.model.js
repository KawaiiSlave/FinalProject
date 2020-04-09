//requiring models, and creating a new schema for le db
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//A expenses schema with some validashuns. :>
const expenseSchema = new Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, required: true},
}, {
    timestamps: true,
});



const Expense = mongoose.model("Expense", expenseSchema);

//exporting our model we just created :D
module.exports = Expense;