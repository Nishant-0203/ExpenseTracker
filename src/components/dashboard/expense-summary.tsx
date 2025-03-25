import { Card } from "@/src/components/ui/card"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts" // ✅ Corrected import

interface Expense {
  category: string
  amount: number
}

interface ExpenseSummaryProps {
  expenses: Expense[]
  showAllCharts?: boolean
}

export default function ExpenseSummary({ expenses, showAllCharts = false }: ExpenseSummaryProps) {
  // Calculate category totals
  const categoryData: Record<string, number> = expenses.reduce((acc, expense) => {
    const category = expense.category || "Other"
    acc[category] = (acc[category] || 0) + expense.amount
    return acc
  }, {})

  const pieData = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category],
  }))

  // Monthly data (simplified for demo)
  const monthlyData = [
    { name: "Jan", amount: 1200 },
    { name: "Feb", amount: 1100 },
    { name: "Mar", amount: 1300 },
    { name: "Apr", amount: 900 },
    { name: "May", amount: 1500 },
    { name: "Jun", amount: 1700 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"]

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Pie Chart */}
        <Card className="p-4">
          <h3 className="mb-4 text-lg font-medium">Spending by Category</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number | string) => [`$${Number(value).toFixed(2)}`, "Amount"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Bar Chart */}
        <Card className="p-4">
          <h3 className="mb-4 text-lg font-medium">Monthly Expenses</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value: number | string) => [`$${Number(value).toFixed(2)}`, "Amount"]} />
                <Bar dataKey="amount" fill="#8884d8">
                  {monthlyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Area Chart - Conditional Rendering */}
      {showAllCharts && (
        <Card className="p-4">
          <h3 className="mb-4 text-lg font-medium">Expense Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value: number | string) => [`$${Number(value).toFixed(2)}`, "Amount"]} />
                <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}
    </div>
  )
}
