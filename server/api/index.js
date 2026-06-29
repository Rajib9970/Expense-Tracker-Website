const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const expenseRoutes = require("../routes/expenseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Expense Tracker API Running");
});

// Connect to MongoDB only once
let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGO_URI);

  isConnected = true;
  console.log("MongoDB Connected");
}

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

module.exports = app;