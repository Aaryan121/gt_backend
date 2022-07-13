const asyncHandler = require("express-async-handler");

// desc get Api
// route GET /api
// access Private
const getApi = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "hello from controller" });
});

const setApi = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a field");
  }

  res.status(200).json({ message: "set api" });
});
const updateApi = asyncHandler(async (req, res) => {
  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});
const deleteApi = asyncHandler(async (req, res) => {
  res.json({ message: `get blogs notices and semester ${req.params.id}` });
});
module.exports = { getApi, setApi, updateApi, deleteApi };
