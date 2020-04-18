const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//requiring a few modules

//getting ready to stand up our server
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//connecting to our database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/expenseTracker_db",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);



//requiring our routes
const expensesRouter = require('./routes/expenses');
const usersRouter = require('./routes/users');
//using said routes
app.use('/expenses', expensesRouter);
app.use('/users', usersRouter);

//telling our server what port we are running on
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});