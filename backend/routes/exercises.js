const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// first route that handles incoming http get requests on the /users url path
router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .then(err => res.status(400).json('Error: ' + err));
});

// handles incoming http post requests on the /users/add url path
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({username, description, duration, date});

  // save new exercise to database
  newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;