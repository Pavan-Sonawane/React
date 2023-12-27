// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from './Componant/Layout';
// import Home from './Componant/Home';
// import Contact from './Componant/Contact';
// import NoPage from './Componant/NoPage';
// import About from  './Componant/About' ;
// import Counter from './Componant/Counter' ;


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="about" element={<About/>} />
//           <Route path="*" element={<NoPage />} />
//           <Route path="counter" element={<Counter/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// App.js

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/configureStore';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import OrderItemList from './components/OrderItemList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>React Redux CRUD App</h1>

          <Routes>
            <Route path="/" element={<OrderItemList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/add-product" element={<ProductForm />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
