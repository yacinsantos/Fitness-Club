const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const path = require("path");

const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());

// connect to mongoDB
try {
  mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("mongo db connected");
} catch (error) {}

app.use("/files", express.static(path.resolve(__dirname, "..", "files")));

//Routes
app.use(routes);

// Listen to port 8000
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
