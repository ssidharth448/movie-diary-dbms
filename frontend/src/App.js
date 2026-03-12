import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [runtime, setRuntime] = useState("");
  const [language, setLanguage] = useState("");

  const API = "http://127.0.0.1:3001";

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios.get(API + "/movies")
      .then(res => setMovies(res.data));
  };

  const addMovie = () => {

    axios.post(API + "/movies", {
      title: title,
      release_year: year,
      runtime_mins: runtime,
      language: language
    }).then(() => {

      fetchMovies();
      setTitle("");
      setYear("");
      setRuntime("");
      setLanguage("");

    });
  };

  return (

    <div className="container">
    
    <h1>🎬 MOVIE DIARY</h1>
    
    <h2>Add Movie</h2>
    
    <input
    placeholder="TITLE"
    value={title}
    onChange={e=>setTitle(e.target.value)}
    />
    
    <input
    placeholder="YEAR"
    value={year}
    onChange={e=>setYear(e.target.value)}
    />
    
    <input
    placeholder="RUNTIME"
    value={runtime}
    onChange={e=>setRuntime(e.target.value)}
    />
    
    <input
    placeholder="LANGUAGE"
    value={language}
    onChange={e=>setLanguage(e.target.value)}
    />
    
    <button onClick={addMovie}>ADD MOVIE</button>
    
    <h2>MOVIE LIST</h2>
    
    {movies.map(movie => (
    
    <div className="movie-card" key={movie.movie_id}>
    
    <h3>{movie.title}</h3>
    <p>Year: {movie.release_year}</p>
    <p>Runtime: {movie.runtime_mins} mins</p>
    <p>Language: {movie.language}</p>
    
    </div>
    
    ))}
    
    </div>
    
    )
}

export default App;