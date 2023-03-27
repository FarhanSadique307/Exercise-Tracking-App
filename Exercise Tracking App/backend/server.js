require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");
mongoose.set("useUnifiedTopology", true);
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/workouts", workoutRoutes);
app.use("/user", userRoutes);

// connect to db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Has Been Connected");
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
