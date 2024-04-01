const express = require("express");
const cors = require("cors");
const myParser = require("body-parser");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const liveSite = "https://sharesheet.netlify.app/";
// fs.rmdirSync('./uploads/img', { recursive: true });

module.exports.dir = __dirname;

// middlewares
app.use(cors());
// app.use(express.json({ extended: false }));
app.use(myParser.json({ limit: "200mb" }));
app.use(myParser.urlencoded({ limit: "200mb", extended: true }));
// database connection
const connectDB = require("./db/db");

connectDB();

app.get("/", (req, res) => {
  // const data = fs.readFileSync('rawdata/data.json', 'utf-8');
  res.send(`Welcome to Sharesheet api try to visit ${liveSite}`);
});

// Routes
app.use("/auth/", require("./routes/auth"));
// app.use("/upload/img", require("./routes/imageUpload"));
// app.use("/upload/csv", require("./routes/csvUpload"));
app.use("/sheet", require("./routes/api/sheet"));
app.use("/user", require("./routes/api/user"));

app.listen(PORT, () => {
  console.log(`server is runnig on port ${PORT}`);
});
