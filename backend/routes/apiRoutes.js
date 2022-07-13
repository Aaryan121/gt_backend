const express = require("express");
const router = express.Router();
const {
  getApi,
  setApi,
  updateApi,
  deleteApi,
} = require("../controllers/apiController");

router.route("/csit").get(getApi).post(setApi);

router.route("/csit/:id").put(updateApi).delete(deleteApi);

//router.get("/", getApi);

//router.post("/", setApi);

//outer.put("/:id", updateApi);

//router.delete("/:id", deleteApi);

module.exports = router;
