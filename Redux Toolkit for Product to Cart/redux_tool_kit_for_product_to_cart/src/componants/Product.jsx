// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../store/cartSlice';
// import { fetchProducts, selectProducts } from '../store/productSlice';
// import { Link } from 'react-router-dom';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Product = () => {
//   const dispatch = useDispatch();
//   const products = useSelector(selectProducts);

//   const [totalItemCount, setTotalItemCount] = useState(0);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   const handleAddToCart = (product) => {
//     setTotalItemCount(prevCount => prevCount + 1);
//     dispatch(addToCart(product));
//   };

//   return (
//     <div>
//       <Link to="/cart"> 
//         <Button variant="primary">
//           Total Items in Cart: {totalItemCount}
//         </Button>
//       </Link>
//       <Row className="row-margin">
//         {products.map(product => (
//             <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="col-padding mb-4 mr-4">
//   <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//     <Card.Img 
//       variant="top" 
//       src={product.image} 
//       alt={product.title} 
//       style={{ objectFit: 'contain', height: '200px', width: '100%' }} 
//     />
//     <Card.Body className="d-flex flex-column">
//       <div>
//         <Card.Title>{product.title}</Card.Title>
//         <Card.Text>
//           <p>Price: ${product.price}</p>
//           <p>Category: {product.category}</p>
//           <p>
//             Rating: {product.rating.rate} ({product.rating.count} Reviews)
//           </p>
//         </Card.Text>
//       </div>
//       <div className="mt-auto">
//         <Button 
//           variant="primary" 
//           onClick={() => handleAddToCart(product)} 
//           style={{ width: '100%' }}
//         >
//           Add to Cart
//         </Button>
//       </div>
//     </Card.Body>
//   </Card>
// </Col>

//         ))}
//       </Row>
//     </div>
//   );
// };

// export default Product;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity } from '../store/cartSlice';
import { fetchProducts, selectProducts } from '../store/productSlice';
// import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const cartItems = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const handleAddToCart = (product) => {
  //   const existingItem = cartItems.find(item => item.id === product.id);

  //   if (existingItem) {
  //     dispatch(updateQuantity({ id: product.id, quantity: existingItem.quantity + 1 }));
  //   } else {
  //     dispatch(addToCart(product));
  //   }
  // };
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
  
    if (existingItem) {
      dispatch(updateQuantity({ id: product.id, quantity: (existingItem.quantity || 0) + 1 }));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };
  // const totalItemCount = cartItems.reduce((total, item) => {
  //   if (typeof item.quantity === 'number') {
  //     return total + item.quantity;
  //   } else {
  //     console.error(`Item with ID ${item.id} has a non-numeric quantity: ${item.quantity}`);
  //     return total;
  //   }
  // }, 0);
  return (
    <div>
      {/* <Link to="/cart"> 
        <Button variant="primary">
          Total Items in Cart: {totalItemCount}
        </Button>
      </Link> */}
      <center><h1>Product Page</h1></center>
      <Row className="row-margin">
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="col-padding mb-4 mr-4">
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Card.Img 
                variant="top" 
                src={product.image} 
                alt={product.title} 
                style={{ objectFit: 'contain', height: '200px', width: '100%' }} 
              />
              <Card.Body className="d-flex flex-column">
                <div>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>
                      Rating: {product.rating.rate} ({product.rating.count} Reviews)
                    </p>
                  </Card.Text>
                </div>
                  <div className="mt-auto">
                    <Button 
                      variant="primary" 
                      onClick={() => handleAddToCart(product)} 
                      style={{ width: '100%' }}
                    >
                      Add to Cart
                    </Button>
                  </div>

                  
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Product;
