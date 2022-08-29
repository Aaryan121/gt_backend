const express = require("express");
const dotenv = require("dotenv").config();
const colours = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/apiRoutes"));
app.use("/api", require("./routes/semRoutes"));
app.use("/api", require("./routes/subRoutes"));
app.use("/api", require("./routes/noteRoutes"));
app.use("/api", require("./routes/videoRoutes"));
app.use("/api", require("./routes/impQuestionsRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
