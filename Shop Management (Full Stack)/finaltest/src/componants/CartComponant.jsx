
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCart, removeFromCart } from '../actions/cartActions';
// import AddToCartForm from './AddToCartForm';
// import UpdateCartItemForm from './UpdateCartItemForm';
// import { Card, CardContent, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
// import CategoryDisplay from './CategoryDisplay';
// const CartDisplay = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.cartItems || []);

//   useEffect(() => {
//     dispatch(fetchCart());
//   }, [dispatch]);

//   const [selectedCartItem, setSelectedCartItem] = useState(null);

//   const handleRemoveClick = (productId) => {
//     dispatch(removeFromCart(productId));
//   };

//   if (!Array.isArray(cart)) {
//     console.error('Cart data is not an array:', cart);
//     return <div>Error loading cart data</div>;
//   }

//   if (cart.length === 0) {
//     return (
//       <Card>
//         <CardContent>
//           <h2>Cart Items</h2>
//           <p>No items in the cart</p>
//         </CardContent>
//       </Card>
//     );
//   }

//   return (
//     <Card>
//       <CardContent>
       
//         <h2>Cart Items</h2>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Cart ID</TableCell>
//               <TableCell>Product ID</TableCell>
//               <TableCell>Quantity</TableCell>
//               <TableCell>Product Name</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {cart.map((item) => (
//               <TableRow key={item.cartId}>
//                 <TableCell>{item.cartId}</TableCell>
//                 <TableCell>{item.productId}</TableCell>
//                 <TableCell>{item.quantity}</TableCell>
//                 <TableCell>{item.productName}</TableCell>
//                 <TableCell>{item.price}</TableCell>
//                 <TableCell>
//                   <Button onClick={() => handleRemoveClick(item.productId)} variant="contained" color="secondary">
//                     Remove
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         {selectedCartItem && <UpdateCartItemForm cartItem={selectedCartItem} />}
//       </CardContent>
//     </Card>
//   );
// };

// export default CartDisplay;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, removeFromCart } from '../actions/cartActions';
import { addOrder } from '../actions/orderAction';
import { Card, CardContent, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';
import UpdateCartItemForm from './UpdateCartItemForm';
import api from '../services/api';

const CartDisplay = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems || []);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const [selectedCartItem, setSelectedCartItem] = useState(null);

  const handleRemoveClick = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleBuyNowClick = () => {
    const order = {
      items: cart.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    };
  
    console.log('Order Payload:', order);
  
    dispatch(addOrder(order));
  };

  if (!Array.isArray(cart)) {
    console.error('Cart data is not an array:', cart);
    return <div>Error loading cart data</div>;
  }

  if (cart.length === 0) {
    return (
      <Card>
        <CardContent>
          <h2>Cart Items</h2>
          <p>No items in the cart</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent>
        <h2>Cart Items</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cart ID</TableCell>
              <TableCell>Product ID</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <TableRow key={item.cartId}>
                <TableCell>{item.cartId}</TableCell>
                <TableCell>{item.productId}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Button onClick={() => handleRemoveClick(item.productId)} variant="contained" color="secondary">
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={handleBuyNowClick} variant="contained" color="primary">
          Buy Now
        </Button>
        {selectedCartItem && <UpdateCartItemForm cartItem={selectedCartItem} />}
      </CardContent>
    </Card>
  );
};

export default CartDisplay;
