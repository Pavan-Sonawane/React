// import React, { useState, useEffect } from 'react';

// function MovieList() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://localhost:44380/api/Movie')
//       .then(response => response.json())
//       .then(data => {
//         setMovies(data);
//         setLoading(false);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container">
//       <h1 className="mt-5">Movie List</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul className="list-group">
//           {movies.map(movie => (
//             <li key={movie.id} className="list-group-item mb-3">
//               <div className="card">
//                 <div className="card-body bg-light"> {/* Added bg-light for background color */}
                
//                   <h4 className="card-title text-primary"><strong>Title:</strong> {movie.title}</h4> {/* Added text-primary for blue color */}
//                   <p className="card-text"><strong>ID:</strong> {movie.id}</p>
//                   <p className="card-text"><strong>Genre:</strong> {movie.genere}</p>
//                   <p className="card-text"><strong>Director:</strong> {movie.director}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default MovieList;


import React, { useState, useEffect } from 'react';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://localhost:7177/api/Movie')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://localhost:44380/api/Movie/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // Remove the deleted movie from the list
          setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
        } else {
          alert('Error deleting movie');
        }
      })
      .catch(error => console.error('Error deleting movie:', error));
  };

  return (
    <div className="container">
      <h1 className="mt-5">Movie List</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {movies.map(movie => (
            <li key={movie.id} className="list-group-item mb-3">
              <div className="card">
                <div className="card-body bg-light">
                  <h4 className="card-title text-primary"><strong>Title:</strong> {movie.title}</h4>
                  <p className="card-text"><strong>ID:</strong> {movie.id}</p>
                  <p className="card-text"><strong>Genre:</strong> {movie.genre}</p>
                  <p className="card-text"><strong>Director:</strong> {movie.director}</p>
                  <button className="btn btn-danger" onClick={() => handleDelete(movie.id)}>Delete</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
