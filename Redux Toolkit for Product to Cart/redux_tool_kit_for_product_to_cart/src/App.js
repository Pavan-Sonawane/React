import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componants/Navbar';
import Product from './componants/Product';
import Cart from './componants/Cart';
import OrderSuccessComponent from './componants/OrderSuccessComponent';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" component={OrderSuccessComponent} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
