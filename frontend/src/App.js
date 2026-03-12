import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3001/movies")
      .then(res => {
        setMovies(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Movie Diary</h1>

      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.movie_id}>
              {movie.title} ({movie.release_year})
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default App;