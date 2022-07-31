const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  subId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  syllabusUrl: {
    type: String,
    required: true,
  },
});

module.export = mongoose.model("Notes", subjectSchema);
