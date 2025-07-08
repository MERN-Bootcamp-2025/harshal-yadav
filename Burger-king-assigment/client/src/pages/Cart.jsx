import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const CartPage = () => {
  const { cart, setCart } = useCart();
  const [meals, setMeals] = useState([]);
  const [products, setProducts] = useState([]);
  const [bestOptions, setBestOptions] = useState([]);

  // Group items by product ID and quantity
  const groupedCart = cart.reduce((acc, item) => {
    acc[item.id] = acc[item.id] || { ...item, quantity: 0 };
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  const cartItems = Object.values(groupedCart);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

  const updateQuantity = (product, delta) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      if (delta > 0) {
        // Add more of the same item
        newCart.push(product);
      } else {
        // Remove one item
        const index = newCart.findIndex((p) => p.id === product.id);
        if (index !== -1) {
          newCart.splice(index, 1);
        }
      }
      return newCart;
    });
  };

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
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 shadow rounded">
                <div>
                  <h4 className="font-semibold">{item.p_name}</h4>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item, -1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >−</button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item, 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >+</button>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-6 text-xl font-semibold">Total: ${cartTotal.toFixed(2)}</h3>

          <button
            onClick={handleOptimize}
            className="mt-6 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Optimize Bill
          </button>

          {bestOptions.length > 0 && (
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-2">🍱 Optimized Suggestion</h4>
              <ul className="space-y-4">
                {bestOptions.map((meal, i) => {
                  const extraCost = Object.entries(meal.extraItems || {}).reduce((sum, [id, qty]) => {
                    const product = products.find(p => p.id === parseInt(id));
                    return sum + (product?.price || 0) * qty;
                  }, 0);

                  return (
                    <li key={i} className="bg-yellow-100 p-4 rounded shadow">
                      <strong>{meal.m_name}</strong>
                      <p className="text-sm text-gray-600">{meal.description}</p>
                      <div className="mt-2 text-sm text-gray-800">
                        Meal Price: ${(meal.price - extraCost).toFixed(2)} <br />
                        Extra Items Cost: ${extraCost.toFixed(2)} <br />
                        <strong>Total Cost: ${meal.price.toFixed(2)}</strong>
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
                                    {product?.p_name} × {qty} (${(product.price * qty).toFixed(2)})
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
