const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <h2>🛒 Cart</h2>
      {cart.map((item, i) => (
        <div key={i}>{item.p_name} - ${item.price}</div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
