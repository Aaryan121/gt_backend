const express = require("express");
const router = express.Router();

const {
    getimp, setimp, updateimp, deleteimp
  } = require("../controllers/impQuestionsController");

  router.route("/csit/sem/sub/impQuestions").get(getimp).post(setimp);

  router.route("/csit/sem/sub/impQuestions/:id").put(updateimp).delete(deleteimp);

module.exports = router;