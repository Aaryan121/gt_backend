const express = require("express");
const router = express.Router();

const {
    getNote, setNote, updateNote, deleteNote
  } = require("../controllers/noteController");

  router.route("/csit/sem/sub/notes").get(getNote).post(setNote);

  router.route("/csit/sem/sub/notes/:id").put(updateNote).delete(deleteNote);

module.exports = router;