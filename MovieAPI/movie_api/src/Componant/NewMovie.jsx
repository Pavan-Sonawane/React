import React, { useState } from 'react';

const NewMovie = () => {
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    genere: '',
    date: '',
    director: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://localhost:7177/api/Movie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data inserted successfully!');
      } else {
        alert('Error inserting data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    
        <div className="container mt-5">
          <div className="card bg-info text-white p-4">
            <div className="card-body">
              <h2 className="card-title mb-4">Add a New Movie</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    style={{ fontFamily: 'Arial', fontSize: '16px', padding: '8px', margin: '4px 0' }}
                    value={formData.title}
                    onChange={handleChange}
                    placeholder='Enter the Name of the Movie'
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="genere">Genre:</label>
                  <input
                    type="text"
                    id="genere"
                    name="genere"
                    className="form-control"
                    style={{ fontFamily: 'Arial', fontSize: '16px', padding: '8px', margin: '4px 0' }}
                    value={formData.genre}
                    onChange={handleChange}
                    placeholder='Enter the Genre'
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="director">Director:</label>
                  <input
                    type="text"
                    id="director"
                    name="director"
                    className="form-control"
                    style={{ fontFamily: 'Arial', fontSize: '16px', padding: '8px', margin: '4px 0' }}
                    value={formData.director}
                    onChange={handleChange}
                    placeholder='Enter the Name of Director'
                  />
                </div>
                <button type="submit" className="btn btn-light">Submit</button>
              </form>
            </div>
          </div>
        </div>
  );
};

export default NewMovie;    
