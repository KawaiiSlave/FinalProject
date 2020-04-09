//require our modules.
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const routes = require("./routes");


//contains our environment variables in the dotenv file.
require("dotenv").config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})




//stands up our server
const app = express();
const port = process.env.PORT || 7777;


//parses sent and received JSON
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//requiring files,
const expensesRouter = require("./routes/expenses");
const usersRouter = require("./routes/users");

//and then using the above files
app.use(routes)

//starts up our server
app.listen(port, () => {
    console.log(`Server listening on port : ${port}`);
});