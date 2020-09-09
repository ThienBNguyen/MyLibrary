const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('authors/index');
});

router.get('/new', (req, res) => {
  res.render('auhtors/new');
});

router.post('/', (req, res) => {
  res.send('Create');
});
module.exports = router;
