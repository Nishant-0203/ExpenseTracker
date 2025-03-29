"use client"

import { useState } from "react"
import { BarChart, Calendar, DollarSign, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import DashboardHeader from "@/components/dashboard/dashboard-header"
import ExpenseForm from "@/components/dashboard/expense-form"
import ExpenseList from "@/components/dashboard/expense-list"
import ExpenseSummary from "@/components/dashboard/expense-summary"
import FilterBar from "@/components/dashboard/filter-bar"

// Mock data for demonstration
const mockExpenses = [
  {
    id: "1",
    description: "Grocery shopping",
    amount: 85.75,
    category: "Food",
    date: "2023-06-15",
  },
  {
    id: "2",
    description: "Movie tickets",
    amount: 24.99,
    category: "Entertainment",
    date: "2023-06-18",
  },
  {
    id: "3",
    description: "Gas",
    amount: 45.5,
    category: "Transportation",
    date: "2023-06-20",
  },
  {
    id: "4",
    description: "Dinner with friends",
    amount: 68.35,
    category: "Food",
    date: "2023-06-22",
  },
  {
    id: "5",
    description: "Monthly rent",
    amount: 1200.0,
    category: "Housing",
    date: "2023-06-01",
  },
]

type FilterConfig = {
  search: string;
  category: "all" | "food" | "transportation" | "entertainment" | "housing" | "utilities" | null;
  minAmount: number | null;
  maxAmount: number | null;
  sortBy: "newest" | "oldest" | "highest" | "lowest";
}

export default function DashboardPage() {
  const [expenses, setExpenses] = useState(mockExpenses)
  const [isAddingExpense, setIsAddingExpense] = useState(false)
  const [editingExpense, setEditingExpense] = useState<any>(null)
  
  const [filters, setFilters] = useState<FilterConfig>({
    search: "",
    category: null,
    minAmount: null,
    maxAmount: null,
    sortBy: "newest",
  })

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  const handleAddExpense = async (newExpense: any) => {
    try {
      const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExpense),
      })

      if (!response.ok) {
        throw new Error('Failed to add expense')
      }

      const savedExpense = await response.json()
      setExpenses([...expenses, savedExpense])
      setIsAddingExpense(false)
    } catch (error) {
      console.error('Error adding expense:', error)
      // Here you might want to show an error notification to the user
    }
  }

  const handleEditExpense = (updatedExpense: any) => {
    setExpenses(expenses.map((expense) => (expense.id === updatedExpense.id ? updatedExpense : expense)))
    setEditingExpense(null)
  }

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const handleFilterChange = (newFilters: FilterConfig) => {
    setFilters(newFilters)
  }

  const getFilteredExpenses = () => {
    let filtered = [...expenses]

    if (filters.search) {
      filtered = filtered.filter(expense => 
        expense.description.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    if (filters.category && filters.category !== "all") {
      filtered = filtered.filter(expense => 
        expense.category.toLowerCase() === filters.category?.toLowerCase()
      )
    }

    if (filters.minAmount !== null) {
      filtered = filtered.filter(expense => expense.amount >= filters.minAmount!)
    }

    if (filters.maxAmount !== null) {
      filtered = filtered.filter(expense => expense.amount <= filters.maxAmount!)
    }

    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case "highest":
          return b.amount - a.amount
        case "lowest":
          return a.amount - b.amount
        default:
          return 0
      }
    })

    return filtered
  }

  const filteredExpenses = getFilteredExpenses()

  // Prepare filter props for the FilterBar component
  const filterBarProps = {
    filters: {
      searchText: filters.search,
      category: filters.category || "",
      startDate: "",
      endDate: "",
      minAmount: filters.minAmount ? filters.minAmount.toString() : "",
      maxAmount: filters.maxAmount ? filters.maxAmount.toString() : "",
    },
    onFilterChange: (newFilters: any) => {
      // Convert FilterBar's filter format back to our FilterConfig format
      setFilters({
        ...filters,
        search: newFilters.searchText || "",
        category: newFilters.category || null,
        minAmount: newFilters.minAmount ? parseFloat(newFilters.minAmount) : null,
        maxAmount: newFilters.maxAmount ? parseFloat(newFilters.maxAmount) : null,
      });
    },
    onResetFilters: () => {
      setFilters({
        search: "",
        category: null,
        minAmount: null,
        maxAmount: null,
        sortBy: "newest",
      });
    },
    categories: Array.from(new Set(expenses.map(expense => expense.category)))
  };

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <Button onClick={() => setIsAddingExpense(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Expense
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalExpenses.toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">For the current month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{expenses.length}</div>
                  <p className="text-xs text-muted-foreground">Expenses recorded this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Top Category</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Food</div>
                  <p className="text-xs text-muted-foreground">32% of your monthly spending</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Expense Summary</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ExpenseSummary expenses={expenses} />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Expenses</CardTitle>
                  <CardDescription>Your latest 5 expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpenseList
                    expenses={expenses.slice(0, 5)}
                    onEdit={setEditingExpense}
                    onDelete={handleDeleteExpense}
                    compact
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="expenses" className="space-y-4">
            <FilterBar {...filterBarProps} />
            <ExpenseList expenses={filteredExpenses} onEdit={setEditingExpense} onDelete={handleDeleteExpense} />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Expense Analytics</CardTitle>
                <CardDescription>Visualize your spending patterns</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ExpenseSummary expenses={expenses} showAllCharts />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {(isAddingExpense || editingExpense) && (
        <ExpenseForm
          expense={editingExpense}
          onSubmit={editingExpense ? handleEditExpense : handleAddExpense}
          onCancel={() => {
            setIsAddingExpense(false)
            setEditingExpense(null)
          }}
        />
      )}
    </div>
  )
}