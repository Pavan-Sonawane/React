import React, { useState, useEffect } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);

  const darkThemeStyle = {
    backgroundColor: darkTheme ? '#333' : 'white',
    color: darkTheme ? 'white' : 'black',
  };

  return (
    <div className="container mt-5" style={darkThemeStyle}>
      <button onClick={toggleTheme} className="btn btn-primary mb-3">
        Toggle Theme
      </button>
      <h1 className="mb-4">Categories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {categories.map((category, index) => (
            <li key={index} className="list-group-item">{category}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Categories;
