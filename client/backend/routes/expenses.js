//requiring the router agane :l
const router = require("express").Router();
let Expense = require("../models/expense.model");

//finding expenses and returning them as json
router.route("/").get((req, res) => {
    Expense.find()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(400).json(`Error: ` + err));
});


//assigning stuffs to variablez :D
router.route("add").post((req, res) => {
    const username = req.body.username;
    const description = req.body.descrption;
    const price = Number(req.body.price);
    const date = Date.parse(req.body.date);

    const newExpense = new Expense({
        username,
        description,
        price,
        date,
    });

    newExpense.save()
    .then(() => res.json("Expense was added"))
    .catch(err => res.status(400).json(`Error: ` + err));
});

module.exports = router;