const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  subId: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  noteUrl: [
    {
      url: {
        type: String,
      },
    },
  ],
});

module.export = mongoose.model("Notes", noteSchema);
