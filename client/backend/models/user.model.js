//requiring models, and creating a new schema for le db
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//A single user schema with some validashuns. :>

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true,
        unique: true,
        trim: true,
        minlength: 3
      },
}, {

    timestamps: true,

});

const User = mongoose.model("User", userSchema);
//exporting our model we just created :D
module.exports = User;