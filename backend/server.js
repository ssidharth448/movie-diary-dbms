const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// connect to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moviediary"
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed");
    return;
  }
  console.log("Connected to MySQL");
});

// test route
app.get("/", (req, res) => {
    console.log("Root route accessed");
    res.send("MovieDiary backend running");
  });

// get movies
app.get("/movies", (req, res) => {
  db.query("SELECT * FROM Movies", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
  });

  app.get("/movies", (req, res) => {
    db.query("SELECT * FROM Movies", (err, result) => {
      if (err) return res.send(err);
      res.json(result);
    });
  });

  app.post("/movies", (req, res) => {

    const { title, release_year, runtime_mins, language } = req.body;
  
    const sql = `
    INSERT INTO Movies (title, release_year, runtime_mins, language)
    VALUES (?, ?, ?, ?)`;
  
    db.query(sql, [title, release_year, runtime_mins, language], (err) => {
      if (err) return res.send(err);
      res.json({ message: "Movie added successfully" });
    });
  
  });

  app.post("/ratings", (req, res) => {

    const { movie_id, rating } = req.body;
  
    const sql = `
    INSERT INTO Ratings (movie_id, rating)
    VALUES (?, ?)`;
  
    db.query(sql, [movie_id, rating], (err) => {
      if (err) return res.send(err);
      res.json({ message: "Rating added" });
    });
  
  });

  app.get("/search", (req, res) => {

    const title = req.query.title;
  
    const sql = `
    SELECT * FROM Movies
    WHERE title LIKE ?`;
  
    db.query(sql, [`%${title}%`], (err, result) => {
      if (err) return res.send(err);
      res.json(result);
    });
  
  });