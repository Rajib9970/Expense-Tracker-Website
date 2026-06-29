const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Amount cannot be negative"],
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Food",
        "Travel",
        "Shopping",
        "Bills",
        "Entertainment",
        "Education",
        "Others",
      ],
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    date: {
      type: Date,
      required: [true, "Date is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Expense", expenseSchema);