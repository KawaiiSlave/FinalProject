const router = require('express').Router();
let Expense = require('../models/expense.model');
//home route gets all expenses
router.route('/').get((req, res) => {
  Expense.find()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(400).json('Error: ' + err));
});
//add route creates new expenses, and saves them
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const price = Number(req.body.price);
  const date = Date.parse(req.body.date);

  const newExpense = new Expense({
    username,
    description,
    price,
    date,
  });

  newExpense.save()
  .then(() => res.json('Expense added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
 //gets all expenses by id
router.route('/:id').get((req, res) => {
  Expense.findById(req.params.id)
    .then(expense => res.json(expense))
    .catch(err => res.status(400).json('Error: ' + err));
});

//deletes all expenses by id
router.route('/:id').delete((req, res) => {
  Expense.findByIdAndDelete(req.params.id)
    .then(() => res.json('Expense deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//updates all expenses by their id, and saves them
router.route('/update/:id').post((req, res) => {
  Expense.findById(req.params.id)
    .then(Expense => {
      Expense.username = req.body.username;
      Expense.description = req.body.description;
      Expense.price = Number(req.body.price);
      Expense.date = Date.parse(req.body.date);

      Expense.save()
        .then(() => res.json('Expense updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;