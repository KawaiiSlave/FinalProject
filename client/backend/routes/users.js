//requiring router, and the user model
const router = require("express").Router();
let User = require("../models/user.model");

//first route that handles get requests.
//returns promise in json format.
router.route("/").get((req, res)=> {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ` + err));
});

//handles post requests.
//creates new instance of user with username
//then saves it to the databaes. :p
//logs if user has been added
router.route("/add").post((req, res) => {
    const username = req/body.username;

    const newUser = new User({username});

    newUser.save()
     .then(() => res.json("User has been added."))
     .catch(err => res.status(400).json(`Error: ` + err));
});

module.exports = router;