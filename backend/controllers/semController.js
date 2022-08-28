const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");

const { Csit , Semesters } = require("../model/CsitModel.js");

// desc get Api
// route GET /api
// access Private
const getSem = asyncHandler(async (req, res) => {
  const Sem = await Semesters.find();

  res.status(200).json(Sem);
});

const setSem = asyncHandler(async (req, res) => {
  if (!req.body.sem) {
    console.log(req.body.sem)
    res.status(400);
    throw new Error("please add a field");
  }

  const semester = await Semesters.create({
    _id: new mongoose.Types.ObjectId(),
    sem: `${req.body.sem}`,
  })

  const csit = await Csit.findOneAndUpdate({
    _id: "630ac5fd03f2448a3d94a12a"
  }, {$push: {semesters: semester._id}} )

  res.status(200).json({ message: semester });
});

const updateSem = asyncHandler(async (req, res) => {
   await Semesters.findByIdAndUpdate()
  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});


const deleteSem = asyncHandler(async (req, res) => {

    if(!req.params.id){
        throw new Error("please pass id of document you want to remove")
    }
    
    const sem = Semesters.findById(req.params.id)
    await sem.remove()


  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});

module.exports = { getSem, setSem, updateSem, deleteSem };
