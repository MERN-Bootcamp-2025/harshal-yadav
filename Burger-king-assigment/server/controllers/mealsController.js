const Meals = require('../models/meals');

// GET /meals
exports.getMeals = async (req, res) => {
  try {
    const meals = await Meals.findAll();
    res.status(200).json({ meals });
  } catch (err) {
    console.error('Error fetching meals:', err);
    res.status(500).json({ error: 'Failed to fetch meals' });
  }
};

// POST /meals
exports.createMeal = async (req, res) => {
  try {
    const meal = await Meals.create(req.body);
    res.status(201).json({ meal });
  } catch (err) {
    console.error('Error creating meal:', err);
    res.status(400).json({ error: 'Invalid meal data' });
  }
};
