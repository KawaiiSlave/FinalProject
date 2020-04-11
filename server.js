const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/expenseTracker_db",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const expensesRouter = require('./routes/expenses');
const usersRouter = require('./routes/users');

app.use('/expenses', expensesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});