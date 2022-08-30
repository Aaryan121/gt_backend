const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");

const { impques, sub } = require("../model/CsitModel.js");


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
  const imp = await impques.findById(req.params.title)

  if(!imp){
    throw new Error('Invalid title')
  }

  const update = await impques.findByOneAndUpdate({title: `${req.params.title}`},req.body , {new: true})
  res.json({ update });
});


const deleteimp = asyncHandler(async (req, res) => {

    if(!req.params.title){
        throw new Error("please pass title of document you want to remove")
    }
    
    
    const imp = impques.findOne({title: `${req.params.title}`})

    const subj = await sub.findOneAndUpdate({
      courseId: `${parms.CID}`
    }, {$pull: {imp_questions: imp._id}} )

    await imp.deleteOne({title: `${req.params.title}`})



  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});

module.exports = { getimp, setimp, updateimp, deleteimp };
