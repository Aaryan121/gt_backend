const express = require("express");
const router = express.Router();

const {
    getVideo, setVideo, updateVideo, deleteVideo
  } = require("../controllers/videosController");

  router.route("/csit/sem/sub/videos").get(getVideo).post(setVideo);

  router.route("/csit/sem/sub/videos/:id").put(updateVideo).delete(deleteVideo);

module.exports = router;