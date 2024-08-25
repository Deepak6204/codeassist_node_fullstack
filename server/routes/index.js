const express = require('express');
const router = express.Router();
const problemsController = require('../controllers/problemsController');
const notesController = require('../controllers/notesController');
const profileController = require('../controllers/profileController');

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

router.get('/problems', problemsController.getProblems);
router.get('/problems/:id', problemsController.getProblemById);
router.get('/notes', notesController.getNotes);
router.get('/profile', profileController.getProfile);

module.exports = router;