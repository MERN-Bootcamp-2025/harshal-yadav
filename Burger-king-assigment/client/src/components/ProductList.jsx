const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <h4>{p.p_name} - ₹{p.price}</h4>
          <p>{p.description}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
