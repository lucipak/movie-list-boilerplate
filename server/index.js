const db = require("../database");
const express = require("express");
const app = express();
var morgan = require("morgan");
const PORT = 3000 || process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

app.get("/api/movies", (req, res) => {
  let queryStr = "SELECT * FROM movielist";
  db.query(queryStr, (err, data) => {
    err ? res.sendStatus(500) : res.send(data);
  });
});

app.post("/api/movies", (req, res) => {
  console.log(req.body);
  let { title, overview, releaseDate, voterAverage } = req.body;
  let queryStr =
    "INSERT INTO movielist (title, overview, releaseDate, voterAverage) VALUES (?, ? , ? , ?)";
  db.query(queryStr, [title, overview, releaseDate, voterAverage], (err) => {
    err ? res.sendStatus(500) : res.sendStatus(201);
  });
});

app.put("/api/movies", (req, res) => {
  let { id, hasWatched } = req.body;
  console.log(hasWatched);
  let queryStr = "UPDATE movielist SET hasWatched=? WHERE id=?";
  db.query(queryStr, [hasWatched, id], (err) => {
    err ? res.sendStatus(500) : res.sendStatus(201);
  });
});

app.delete("/api/movies/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);

  const query = `DELETE FROM movielist WHERE id=?`;

  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(`Error attempting to delete ${id} from the database.`);
      res.sendStatus(500);
    } else {
      console.log(`Successfully deleted ${id} from the database.`);
      res.sendStatus(200);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
