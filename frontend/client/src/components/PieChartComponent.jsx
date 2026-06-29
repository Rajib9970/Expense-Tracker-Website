import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

function PieChartComponent({ expenses }) {
  const categories = {};

  expenses.forEach((expense) => {
    categories[expense.category] =
      (categories[expense.category] || 0) +
      Number(expense.amount);
  });

  const data = Object.keys(categories).map((key) => ({
    name: key,
    value: categories[key],
  }));

  const COLORS = [
    "#0088FE", // Blue
    "#00C49F", // Green
    "#FFBB28", // Yellow
    "#FF8042", // Orange
    "#AF19FF", // Purple
    "#FF4560", // Red
    "#26A69A", // Teal
  ];

  return (
    <PieChart width={500} height={350}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={120}
        dataKey="value"
        nameKey="name"
        label
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default PieChartComponent;