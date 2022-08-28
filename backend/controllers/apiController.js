const asyncHandler = require("express-async-handler");

const { Csit , Semesters } = require("../model/CsitModel.js");

// desc get Api
// route GET /api
// access Private
const getApi = asyncHandler(async (req, res) => {
  const csit = await Csit.find()
  .populate({ 
    path: 'semesters',
    populate: {
      path: 'subjects',
      model: 'sub'
    } 
 });

  

  res.status(200).json(csit);
});

const setApi = asyncHandler(async (req, res) => {
  if (!req.body.sem) {
    res.status(400);
    throw new Error("please add a field");
  }

  const csit = await Csit.create({
    semesters: `${req.body.sem}`,
  })

  res.status(200).json({ message: "set api" });
});
const updateApi = asyncHandler(async (req, res) => {
  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});
const deleteApi = asyncHandler(async (req, res) => {
  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});

module.exports = { getApi, setApi, updateApi, deleteApi };
