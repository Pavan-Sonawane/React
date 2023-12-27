import React, { Component } from 'react';

class UpdateMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      genere: '',
      director: '',
      returnCode: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleUpdate = () => {
    const { id, title, genere, director } = this.state;

    // Validate if id is provided
    if (id === 0) {
      alert('Please provide a valid id for updating.');
      return;
    }

    // Send the updated data to the API for the movie update
    // fetch(`'/api/movies/'${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    fetch(`https://localhost:7177/api/Movie/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id,
        title,
        genere,
        director,
    }),
    })
   
      .then((response) => {
        this.setState({ returnCode: response.status });
        if (response.ok) {
          // Movie updated successfully
          alert('Movie updated successfully');
          // Redirect or perform any other necessary action
        } else {
          alert('Error updating movie');
        }
      })
      .catch((error) => {
        console.error('Error updating movie:', error);
      });
  };

  render() {
    return (
      <div>
        <h2>Update Movie</h2>
        <form>
          <div>
            <label htmlFor="id">ID:</label>
            <input
              type="number"
              id="id"
              name="id"
              value={this.state.id}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genere"
              name="genere"
              value={this.state.genre}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="director">Director:</label>
            <input
              type="text"
              id="director"
              name="director"
              value={this.state.director}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="button" onClick={this.handleUpdate}>
            Update
          </button>
        </form>
        {this.state.returnCode && (
          <div>
            Return Code: {this.state.returnCode}
          </div>
        )}
      </div>
    );
  }
}

export default UpdateMovie;
