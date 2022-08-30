const express = require("express");
const router = express.Router();
const {
  getApi,
} = require("../controllers/apiController");

router.route("/csit").get(getApi);


//router.get("/", getApi);

//router.post("/", setApi);

//outer.put("/:id", updateApi);

//router.delete("/:id", deleteApi);

module.exports = router;
