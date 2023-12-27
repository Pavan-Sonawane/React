import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Componant/Home';
import Layout from './Componant/Layout';
import LoginComponant from './Componant/LoginComponant';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="logincomponant" element={<LoginComponant/>} />
          {/* <Route path="about" element={<About/>} />
          <Route path="*" element={<NoPage />} />
          <Route path="counter" element={<Counter/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
