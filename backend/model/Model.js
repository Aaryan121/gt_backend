const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CsitSchema = new Schema({
  semesters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Semesters",
    },
  ],
});

const SemesterSchema = new Schema({
  sem: number,
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sub",
    },
  ],
});

const SubSchema = new Schema({
  subjectId: reqString,
  subjectName: reqString,
  syllabusUrl: reqString,
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "notes" }],
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "videos" }],
  imp_questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "impques" }],
});

const NotesSchema = new Schema({
  courseId: reqString,
  title: reqSting,
  noteUrl: reqString,
});

const VideoSchema = new Schema({
  courseID: reqString,
  title: reqString,
  videoUrl: reqString,
});

const ImpSchema = new Schema({
  courseID: reqString,
  title: reqString,
  impUrl: reqString,
});

const Csit = mongoose.model("Csit", CsitSchema);
const Semesters = mongoose.model("Semesters", SemesterSchema);
const sub = mongoose.model("sub", SubSchema);
const notes = mongoose.model("notes", NotesSchema);
const videos = mongoose.model("videos", VideoSchema);
const impques = mongoose.model("impques", ImpSchema);

module.exports = { Csit, Semesters, sub, notes, videos, impques };
