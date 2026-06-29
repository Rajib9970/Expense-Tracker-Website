import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

function BarChartComponent({ expenses }) {
  const categories = {};

  expenses.forEach((expense) => {
    categories[expense.category] =
      (categories[expense.category] || 0) +
      Number(expense.amount);
  });

  const data = Object.keys(categories).map((key) => ({
    category: key,
    amount: categories[key],
  }));

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF4560",
    "#26A69A",
  ];

  return (
    <BarChart
      width={700}
      height={350}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="category" />

      <YAxis />

      <Tooltip />

      <Bar dataKey="amount">
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Bar>
    </BarChart>
  );
}

export default BarChartComponent;