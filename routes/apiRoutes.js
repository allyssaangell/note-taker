const fs = require("fs");
const path = require("path");
const router = require("express").Router();
//const { notes } = require("../../db/db");

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

router.post("/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const note = req.body;
  req.body.id = notes.length.toString();
  notes.push(note);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(note);
});

router.delete("/notes/:id", (req, res) => {
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  const deleteNote = notes.filter(
    (removeNote) => removeNote.id !== req.params.id
  );
  fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
  res.json(deleteNote);
});

module.exports = router;
