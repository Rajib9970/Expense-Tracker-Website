function SummaryCards({ expenses }) {
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const totalEntries = expenses.length;

  const averageExpense =
    totalEntries > 0
      ? (totalExpense / totalEntries).toFixed(2)
      : 0;

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyTotal = expenses
    .filter((expense) => {
      const expenseDate = new Date(expense.date);

      return (
        expenseDate.getMonth() === currentMonth &&
        expenseDate.getFullYear() === currentYear
      );
    })
    .reduce(
      (sum, expense) => sum + Number(expense.amount),
      0
    );

  return (
    <div className="summary-container">
      <div className="summary-card">
        <h3>Total Expense</h3>
        <p>₹ {totalExpense}</p>
      </div>

      <div className="summary-card">
        <h3>Total Entries</h3>
        <p>{totalEntries}</p>
      </div>

      <div className="summary-card">
        <h3>Average Expense</h3>
        <p>₹ {averageExpense}</p>
      </div>

      <div className="summary-card">
        <h3>This Month</h3>
        <p>₹ {monthlyTotal}</p>
      </div>
    </div>
  );
}

export default SummaryCards;