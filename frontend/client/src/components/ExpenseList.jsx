import { useEffect, useState } from "react";
import api from "../services/api";
import ExpenseCard from "./ExpenseCard";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const response = await api.get("/expenses");
      setExpenses(response.data.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/expenses/${id}`);

      setExpenses(
        expenses.filter((expense) => expense._id !== id)
      );

      alert("Expense deleted successfully!");
    } catch (error) {
      console.error("Error deleting expense:", error);
      alert("Failed to delete expense");
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Expense List</h2>

      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseCard
            key={expense._id}
            expense={expense}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

export default ExpenseList;