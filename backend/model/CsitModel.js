const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CsitSchema = new Schema({
  semesters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Semesters",
      unique: true
    },
  ],
});

const SemesterSchema = new Schema({
  sem: {
    type:String,
    require:true,
    unique: true
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sub",
    },
  ],
});

const SubSchema = new Schema({
  subjectId: {
    type: String,
    require: true,
  },
  subjectName: {
    type: String,
    require: true,
  },
  syllabusUrl: {
    type: String,
    require: true,
  },
  sem:{type: String, require: true},
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "notes" }],
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "videos" }],
  imp_questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "impques" }],
});

const NotesSchema = new Schema({
  courseId: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  noteUrl: {
    type: String,
    require: true,
  },
});

const VideoSchema = new Schema({
  courseID: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  videoUrl: {
    type: String,
    require: true,
  },
});

const ImpSchema = new Schema({
  courseID: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  impUrl: {
    type: String,
    require: true,
  },
});

const Csit = mongoose.model("Csit", CsitSchema);
const Semesters = mongoose.model("Semesters", SemesterSchema);
const sub = mongoose.model("sub", SubSchema);
const notes = mongoose.model("notes", NotesSchema);
const videos = mongoose.model("videos", VideoSchema);
const impques = mongoose.model("impques", ImpSchema);

module.exports = { Csit, Semesters, sub, notes, videos, impques };
