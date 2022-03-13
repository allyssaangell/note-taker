// GET route, POST route, DELETE route
const fs = require("fs");
const path = require("path");
const router = require("express").Router();
// const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { notes } = require("../../db/db");

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db"));
});

router.post("/api/notes", (req, res) => {
  //   const notes = JSON.parse(fs.readFileSync("./db/db"));
//  const note = req.body;
  //   notes.push(newNote);
  //   fs.writeFileSync("./db/db", JSON.stringify(notes));
  //   req.body.id = notes.length.toString();
  //   const note = saveNote(req.body, notes);
 // res.json(note);
  console.log(req.body);
});

module.exports = router;
