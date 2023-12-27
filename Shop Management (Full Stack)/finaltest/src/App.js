
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/configureStore';
import ProductList from './componants/ProductList';

import OrderItemList from './componants/OrderItemList';
import Layout from './componants/navigation/Layout';
import Home from './componants/Home';
import OrderList from './componants/OrderList';
import CategoryComponent from './componants/CategoryComponent';
import CartComponant from './componants/CartComponant';
import OrderProductSearch from './componants/OrderProductSearch'
import CategoryDisplay from './componants/CategoryDisplay'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/add-product" element={<OrderItemList />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/category" element={<CategoryComponent/>} />
            <Route path="/cart" element={<CartComponant/>} />
            <Route path="/carts" element={<OrderProductSearch/>} />
            <Route path="/cartss" element={<CategoryDisplay/>} />
          </Route>
            
        </Routes>
       
        </div>
      </Router>
    </Provider>
  );
}

export default App;
