const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pdflink = new Schema({
  link: string,
});

const notes = new Schema({
  pdflinks: [pdflink],
});

const videoUrl = new Schema({
  yt_link: string,
});

const videos = new Schema({
  yt_links: [videoUrl],
});

const impUrl = new Schema({
  impQuestionLink: string,
});

const impQuestions = new Schema({
  impLink: [impUrl],
});

const subject = new Schema({
  subjectId: string,
  subjectName: string,
  syllabusUrl: string,
  notes: [notes],
  videos: [videos],
  imp_questions: [impQuestions],
});

const semester = new Schema({
  sem: string,
  semId: Number,
  subjects: [subject],
});
