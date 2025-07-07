import { useState } from 'react';

const Optimizer = ({ cart, meals }) => {
  const [optimized, setOptimized] = useState(null);

  const optimizeBill = () => {
    const cartIds = cart.map(p => p.id);
    let cartTotal = cart.reduce((sum, p) => sum + p.price, 0);

    let bestMeal = null;

    for (let meal of meals) {
      const mealProductIds = meal.products; // assuming array of product IDs
      const overlap = mealProductIds.filter(id => cartIds.includes(id));
      if (overlap.length > 0 && meal.price < cartTotal) {
        bestMeal = meal;
        cartTotal = meal.price;
      }
    }

    setOptimized(bestMeal);
  };

  return (
    <div>
      <button onClick={optimizeBill}>💡 Optimize Bill</button>
      {optimized && (
        <div>
          <h3>💰 Optimized Meal Suggestion</h3>
          <p>{optimized.m_name} - ₹{optimized.price}</p>
          <p>{optimized.description}</p>
        </div>
      )}
    </div>
  );
};

export default Optimizer;
