import { useState } from "react";
import api from "../services/api";

function ExpenseForm() {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "Food",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/expenses", {
        title: expense.title,
        amount: Number(expense.amount),
        category: expense.category,
        description: expense.description,
        date: expense.date,
      });

      alert("Expense Added Successfully!");

      setExpense({
        title: "",
        amount: "",
        category: "Food",
        description: "",
        date: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to add expense"
      );
    }
  };

  return (
    <div className="form-container">
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={handleChange}
            placeholder="Enter title"
            required
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={expense.category}
            onChange={handleChange}
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Education">Education</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={expense.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn" type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;