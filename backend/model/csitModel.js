const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pdfSchema = new Schema(
  {
    title: reqString,
    link: reqString,
  },
  {
    timestamp: true,
  }
);

const notesSchema = new Schema({
  pdflinks: [pdfSchema],
});

const videoUrlSchema = new Schema(
  {
    title: reqString,
    yt_link: reqString,
  },
  {
    timestamp: true,
  }
);

const videosSchema = new Schema({
  yt_links: [videoUrlSchema],
});

const impUrlSchema = new Schema({
  title: reqString,
  impQuestionLink: reqString,
});

const impQuestionsSchema = new Schema({
  impLink: [impUrlSchema],
});

const subject = new Schema(
  {
    subjectId: reqString,
    subjectName: reqString,
    syllabusUrl: reqString,
    notes: [notesSchema],
    videos: [videosSchema],
    imp_questions: [impQuestionsSchema],
  },
  {
    timestamp: true,
  }
);

const semesterSchema = new Schema(
  {
    sem: reqString,
    semId: reqNumber,
    subjects: [subject],
  },
  {
    timestamp: true,
  }
);
