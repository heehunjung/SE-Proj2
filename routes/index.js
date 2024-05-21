var express = require('express');
var router = express.Router();
var model = require('../models');

// GET home page
router.get('/', async (req, res) => {
  try {
    let result = await model.boards.findAll();
    res.render('index', { title: 'test', rows: result });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error in fetching data');
  }
});

module.exports = router;