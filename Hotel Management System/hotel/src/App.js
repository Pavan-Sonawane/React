
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/configureStore.jsx';
import Layout from './Componants/Layout/Layout.jsx';
import ReservationComponanat from './Componants/ReservationComponant.jsx';
import GuestListComponent from './Componants/GuestListComponent.jsx';
import AttendanceDetails from './Componants/AttendanceDetails.jsx';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
             <Route path="/" element={<GuestListComponent/>} />
            <Route path="/products" element={<AttendanceDetails/>} />
           <Route path="/add-product" element={<ReservationComponanat/>} />
             {/*<Route path="/orders" element={<OrderList />} />
            <Route path="/category" element={<CategoryComponent/>} />
            <Route path="/cart" element={<CartComponant/>} />
            <Route path="/carts" element={<OrderProductSearch/>} />
            <Route path="/cartss" element={<CategoryDisplay/>} /> */}
          </Route>
        </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
