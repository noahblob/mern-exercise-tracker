const router = require('express').Router();
let User = require('../models/user.model');

// first route that handles incoming http get requests on the /users url path
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .then(err => res.status(400).json('Error: ' + err));
});

// handles incoming http post requests on the /users/add url path
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  // save new user to database
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;