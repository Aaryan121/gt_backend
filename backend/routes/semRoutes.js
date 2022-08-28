const express = require("express");
const router = express.Router();

const {
    getSem, setSem, updateSem, deleteSem
  } = require("../controllers/semController");

  router.route("/csit/sem").get(getSem).post(setSem);

  router.route("/csit/sem/:id").put(updateSem).delete(deleteSem);

module.exports = router;