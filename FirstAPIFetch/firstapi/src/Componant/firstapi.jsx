import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => {
      if (item.id === productId) {
        item.quantity -= 1;
      }
      return item.quantity > 0;
    });

    setCart(updatedCart);
  };

  return (
    <div className="container mt-5">
      <h2 className="mt-5">Cart</h2>
      <ul className="list-group">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.title} (Quantity: {item.quantity})</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="btn btn-danger btn-sm"
            >
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
      <h1 className="mb-4">Product List</h1>
      <div className="row">
  {products.map((product) => (
    <div key={product.id} className="col-md-3 mb-4">
      <div className="card" style={{ width: '18rem', height: '100%', margin: '10px', padding: '10px' }}>
        <img src={product.thumbnail} className="card-img-top" style={{ objectFit: 'cover', height: '200px' }} alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <button onClick={() => addToCart(product)} className="btn btn-primary">
            Add to Cart {cart.find(item => item.id === product.id) && cart.find(item => item.id === product.id).quantity}
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default ProductList;
