const asyncHandler = require("express-async-handler");
const { default: mongoose } = require("mongoose");

const { notes, sub } = require("../model/CsitModel.js");

// desc get Api
// route GET /api
// access Private
const getNote = asyncHandler(async (req, res) => {
  const note = await notes.find();

  res.status(200).json(note);
});

const setNote = asyncHandler(async (req, res) => {
  if (!req.body.courseId) {
    res.status(400);
    throw new Error("please add a courseId");
  }

  const note = await notes.create({
    _id: new mongoose.Types.ObjectId(),
    courseId: `${req.body.courseId}`,
    title: `${req.body.title}`,
    noteUrl: `${req.body.noteUrl}`,
  })

  const subj = await sub.findOneAndUpdate({
    courseId: `${note.ObjectId}`
  }, {$push: {notes: note._id}} )

  res.status(200).json({ message: subj });
});

const updateNote = asyncHandler(async (req, res) => {
  const note = await notes.findById(req.params.id)

  if(!note){
    throw new Error('Invalid ID')
  }

   await notes.findByIdAndUpdate(req.params.id,req.body , {new: true})
  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});


const deleteNote = asyncHandler(async (req, res) => {

    if(!req.params.id){
        throw new Error("please pass id of document you want to remove")
    }
    
    const note = notes.findById(req.params.id)
    await note.remove()


  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});

module.exports = { getNote, setNote, updateNote, deleteNote };
