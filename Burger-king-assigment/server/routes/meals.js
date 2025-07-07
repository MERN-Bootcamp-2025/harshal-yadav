const express = require('express');
const router = express.Router();
const mealsController = require('../controllers/mealsController');

router.get('/meals', mealsController.getMeals);
router.post('/meals', mealsController.createMeal);

module.exports = router;
