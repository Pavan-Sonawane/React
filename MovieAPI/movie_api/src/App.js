import Layout from './Componant/Layout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './Componant/Index';
import MovieList from './Componant/MovieList';
import NewMovie from './Componant/NewMovie';
import UpdateMovie from './Componant/UpdateMovie';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index/>} />
        <Route path="movielist" element={<MovieList/>} />
        <Route path="newmovie" element={<NewMovie/>} />
        <Route path="updatemovie" element={<UpdateMovie/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
