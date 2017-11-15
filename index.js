const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors");
let people = require("./people.json");

app.use(cors());
app.use(bodyParser.json());

app.get("/api/people", (req, res) => {
  return res.json(people);
});

app.delete("/api/people/:id", (req, res) => {
  people = people.filter(person => person.id != req.params.id);
  return res.json(people);
});

app.listen(3000, () => console.log("Listening on port 3000"));
