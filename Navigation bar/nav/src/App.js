import './App.css';
import Layout from './Componant/Header/Layout';
import NoPage from './Componant/Body/NoPage';
import Home from './Componant/Body/Home';
import About from './Componant/Body/About';

import {BrowserRouter ,Route ,Routes} from "react-router-dom";
import React from 'react';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
