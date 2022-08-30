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
      model: 'sub',
      populate:[{
        path:'notes',
        model:'notes'
      },
      {
        path:'videos',
        model:'videos'
      },
      {
        path:'imp_questions',
        model:'impques'
      }]
    } 
 });

  

  res.status(200).json(csit);
});


module.exports = { getApi};
