const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");

const {sub, videos } = require("../model/CsitModel.js");

// desc get Api
// route GET /api
// access Private
const getVideo = asyncHandler(async (req, res) => {
  const video = await videos.find();

  res.status(200).json(video);
});

const setVideo = asyncHandler(async (req, res) => {
  console.log(req.body)
  if (!req.body.CID) {
    res.status(400);
    throw new Error("please add a courseId");
  }

  const video = await videos.create({
    _id: new mongoose.Types.ObjectId(),
    courseID: `${req.body.CID}`,
    title: `${req.body.title}`,
    videoUrl:`${req.body.vidUrl}`

  })

  const videog = await sub.findOneAndUpdate({
    courseId: `${video.courseId}`
  }, {$push: {videos: video._id}} )

  res.status(200).json({ message: videog });
});

const updateVideo = asyncHandler(async (req, res) => {
  const video = await videos.findById(req.params.id)

  if(!video){
    throw new Error('Invalid ID')
  }

   await videos.findByIdAndUpdate(req.params.id,req.body , {new: true})
  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});


const deleteVideo = asyncHandler(async (req, res) => {

    if(!req.params.id){
        throw new Error("please pass id of document you want to remove")
    }
    
    const video = videos.findById(req.params.id)

    const videog = await sub.findOneAndUpdate({
      courseId: `${video.courseId}`
    }, {$pull: {videos: video._id}} )

    await video.remove()


  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});

module.exports = { getVideo, setVideo, updateVideo, deleteVideo };
