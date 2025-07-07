
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const CartPage = () => {
  const { cart } = useCart();
  const [meals, setMeals] = useState([]);
  const [products, setProducts] = useState([]);
  const [bestOptions, setBestOptions] = useState([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  // Fetch meals
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await axios.get('http://localhost:3000/meals');
        setMeals(res.data.meals);
      } catch (err) {
        console.error('Error fetching meals:', err);
      }
    };
    fetchMeals();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products');
        setProducts(res.data.products);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

  const handleOptimize = () => {
 
    const productPriceMap = products.reduce((acc, product) => {
      acc[product.id] = product.price;
      return acc;
    }, {});

   
    const cartProductCount = {};
    cart.forEach(item => {
      cartProductCount[item.id] = (cartProductCount[item.id] || 0) + 1;
    });

    let bestCombo = null;
    let bestPrice = cartTotal;

    meals.forEach(meal => {
      const mealProductCount = {};
      (meal.products || []).forEach(id => {
        mealProductCount[id] = (mealProductCount[id] || 0) + 1;
      });

      
      const remaining = { ...cartProductCount };
      Object.entries(mealProductCount).forEach(([id, count]) => {
        if (remaining[id]) {
          remaining[id] = Math.max(remaining[id] - count, 0);
        }
      });

     
      let extraCost = 0;
      Object.entries(remaining).forEach(([id, count]) => {
        extraCost += (productPriceMap[id] || 0) * count;
      });

      const totalCost = meal.price + extraCost;

      if (totalCost < bestPrice) {
        bestPrice = totalCost;
        bestCombo = {
          m_name: meal.m_name,
          description: meal.description,
          imageUrl: meal.imageUrl,
          price: totalCost,
          products: meal.products,
          extraItems: remaining
        };
      }
    });

    if (bestCombo) {
      setBestOptions([bestCombo]);
    } else {
      // No cheaper option found, fallback to original selection
      setBestOptions([
        {
          m_name: "Your Selected Items",
          price: cartTotal,
          description: "No cheaper meal combo found",
          products: cart.map(i => i.id),
          extraItems: {}
        }
      ]);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item, i) => (
              <li key={i} className="bg-white p-3 shadow rounded">
                {item.p_name} - ₹{item.price.toFixed(2)}
              </li>
            ))}
          </ul>

          <h3 className="mt-4 text-xl font-semibold">Total: ₹{cartTotal.toFixed(2)}</h3>

          <button
            onClick={handleOptimize}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Optimize Bill
          </button>

       {bestOptions.length > 0 && (
  <div className="mt-6">
    <h4 className="text-lg font-bold mb-2">🍱 Optimized Suggestion</h4>
    <ul className="space-y-2">
      {bestOptions.map((meal, i) => {
        // Calculate extra cost separately for display
        const extraCost = Object.entries(meal.extraItems || {}).reduce((sum, [id, qty]) => {
          const product = products.find(p => p.id === parseInt(id));
          return sum + (product?.price || 0) * qty;
        }, 0);

        return (
          <li key={i} className="bg-yellow-100 p-3 rounded shadow">
            <strong>{meal.m_name}</strong> <br />
            <span className="text-sm text-gray-600">{meal.description}</span>

            <div className="mt-2 text-sm text-gray-800">
              Meal Price: ₹{(meal.price - extraCost).toFixed(2)} <br />
              Extra Items Cost: ₹{extraCost.toFixed(2)} <br />
              <strong>Total Cost: ₹{meal.price.toFixed(2)}</strong>
            </div>

            {meal.extraItems && Object.keys(meal.extraItems).length > 0 && (
              <div className="mt-2 text-sm text-gray-700">
                Additional Items Needed:
                <ul className="list-disc ml-4">
                  {Object.entries(meal.extraItems).map(([id, qty], j) => {
                    if (qty > 0) {
                      const product = products.find(p => p.id === parseInt(id));
                      return (
                        <li key={j}>
                          {product?.p_name} × {qty} (₹{(product.price * qty).toFixed(2)})
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  </div>
)}

        </>
      )}
    </div>
  );
};

export default CartPage;
