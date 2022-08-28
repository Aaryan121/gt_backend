const express = require("express");
const router = express.Router();
const {
  getApi,
  setApi,
  updateApi,
  deleteApi,
} = require("../controllers/apiController");
const {
  getSem, setSem, updateSem, deleteSem
} = require("../controllers/semController");

router.route("/csit").get(getApi).post(setApi);
router.route("/csit/sem").get(getSem).post(setSem);

router.route("/csit/:id").put(updateApi).delete(deleteApi);
router.route("/csit/sem/:id").put(updateSem).delete(deleteSem);

//router.get("/", getApi);

//router.post("/", setApi);

//outer.put("/:id", updateApi);

//router.delete("/:id", deleteApi);

module.exports = router;
