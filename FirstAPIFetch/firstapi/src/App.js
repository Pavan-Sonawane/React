import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ProductList from './Componant/firstapi';
import Layout from "./Componant/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Componant/Home";
import Categories from "./Componant/Categories";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="categories" element={<Categories/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
