const express = require('express');
const cors = require('cors');

const router = express.Router();
const problemsController = require('../controllers/problemsController');
const notesController = require('../controllers/notesController');
const profileController = require('../controllers/profileController');
const CodeController = require('../controllers/codeController');

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

router.use(cors());
router.get('/problems', problemsController.getProblems);
router.get('/problems/:id', problemsController.getProblemById);
router.get('/notes', notesController.getNotes);
router.get('/profile', profileController.getProfile);
router.post('/execute-code', CodeController.executeCode);

module.exports = router;