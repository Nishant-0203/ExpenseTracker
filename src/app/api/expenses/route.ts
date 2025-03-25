import { type NextRequest, NextResponse } from "next/server"

import { createExpense, getExpenses } from "@/src/lib/models/expense"

// GET /api/expenses - Get all expenses for the current user
export async function GET(request: NextRequest) {
  try {
    // In a real application, you would get the user ID from the session
    const userId = "user-1"

    // Get expenses from the database
    const expenses = await getExpenses(userId)

    return NextResponse.json(expenses)
  } catch (error) {
    console.error("Error fetching expenses:", error)
    return NextResponse.json({ error: "Failed to fetch expenses" }, { status: 500 })
  }
}

// POST /api/expenses - Create a new expense
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // In a real application, you would get the user ID from the session
    const userId = "user-1"

    // Create the expense in the database
    const expense = await createExpense({
      ...data,
      userId,
    })

    return NextResponse.json(expense, { status: 201 })
  } catch (error) {
    console.error("Error creating expense:", error)
    return NextResponse.json({ error: "Failed to create expense" }, { status: 500 })
  }
}

