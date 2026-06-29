function ExpenseCard({ expense, onDelete }) {
  return (
    <div className="expense-card">
      <h3>{expense.title}</h3>

      <p>
        <strong>Amount:</strong> ₹{expense.amount}
      </p>

      <p>
        <strong>Category:</strong> {expense.category}
      </p>

      <p>
        <strong>Description:</strong> {expense.description}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(expense.date).toLocaleDateString()}
      </p>

      <button
        className="delete-btn"
        onClick={() => onDelete(expense._id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ExpenseCard;