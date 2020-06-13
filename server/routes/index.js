var express = require('express');
var router = express.Router();
var ingredients = require('../controllers/ingredients')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ingredients', ingredients.getIngredients);
router.get('/ingredients/:id', ingredients.getIngredient);
router.post('/ingredients/create', ingredients.createIngredient);

module.exports = router;