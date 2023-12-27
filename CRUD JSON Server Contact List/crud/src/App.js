import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactList from './Componanats/ContactList';
import AddContact from './Componanats/AddContact';
import EditContact from './Componanats/EditContact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
