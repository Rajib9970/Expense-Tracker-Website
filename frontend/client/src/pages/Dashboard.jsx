import { useEffect, useState } from "react";
import api from "../services/api";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCards from "../components/SummaryCards";
import SearchFilter from "../components/SearchFilter";
import PieChartComponent from "../components/PieChartComponent";
import BarChartComponent from "../components/BarChartComponent";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const [showPieChart, setShowPieChart] = useState(false);
  const [showBarChart, setShowBarChart] = useState(false);

  const fetchExpenses = async () => {
    try {
      const response = await api.get("/expenses");
      setExpenses(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch = expense.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || expense.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h1 className="heading">Expense Tracker</h1>

      <SummaryCards expenses={filteredExpenses} />

      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
      />

      <ExpenseForm />

      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "20px 0",
        }}
      >
        <button
          className="btn"
          onClick={() => setShowPieChart(!showPieChart)}
        >
          {showPieChart ? "Hide Pie Chart" : "Show Pie Chart"}
        </button>

        <button
          className="btn"
          onClick={() => setShowBarChart(!showBarChart)}
        >
          {showBarChart ? "Hide Bar Chart" : "Show Bar Chart"}
        </button>
      </div>

      {showPieChart && (
        <div className="chart-container">
          <h2>Expense Category Distribution</h2>
          <PieChartComponent expenses={filteredExpenses} />
        </div>
      )}

      {showBarChart && (
        <div className="chart-container">
          <h2>Expense Category Comparison</h2>
          <BarChartComponent expenses={filteredExpenses} />
        </div>
      )}

      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}

export default Dashboard;