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

module.exports = router;
