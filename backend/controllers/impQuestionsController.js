const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");

const { impques, sub } = require("../model/CsitModel.js");

// desc get Api
// route GET /api
// access Private
const getimp = asyncHandler(async (req, res) => {
  const imp = await impques.find();

  res.status(200).json(imp);
});

const setimp = asyncHandler(async (req, res) => {
  if (!req.body.CID) {
    res.status(400);
    throw new Error("please add a courseId");
  }

  const imp = await impques.create({
    _id: new mongoose.Types.ObjectId(),
    courseId: `${req.body.CID}`,
    title: `${req.body.title}`,
    impUrl: `${req.body.impUrl}`,
  })

  const subj = await sub.findOneAndUpdate({
    courseId: `${imp.courseId}`
  }, {$push: {imp_questions: imp._id}} )

  res.status(200).json({ message: imp });
});

const updateimp = asyncHandler(async (req, res) => {
  const imp = await impques.findById(req.params.id)

  if(!imp){
    throw new Error('Invalid ID')
  }

   await impques.findByIdAndUpdate(req.params.id,req.body , {new: true})
  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});


const deleteimp = asyncHandler(async (req, res) => {

    if(!req.params.id){
        throw new Error("please pass id of document you want to remove")
    }
    
    const imp = impQuestions.findById(req.params.id)
    await imp.remove()


  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});

module.exports = { getimp, setimp, updateimp, deleteimp };
