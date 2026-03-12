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