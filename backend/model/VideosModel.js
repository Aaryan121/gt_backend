const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  subId: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  videoUrl: [
    {
      url: {
        type: String,
      },
    },
  ],
});

module.export = mongoose.model("Videos", videoSchema);
