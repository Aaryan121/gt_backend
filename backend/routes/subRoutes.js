const express = require("express");
const router = express.Router();

const {
    getSub, setSub, updateSub, deleteSub
  } = require("../controllers/subController");

  router.route("/csit/sem/sub").get(getSub).post(setSub);

  router.route("/csit/sem/sub/:id").put(updateSub).delete(deleteSub);

module.exports = router;