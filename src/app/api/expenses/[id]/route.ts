import { type NextRequest, NextResponse } from "next/server"

import { deleteExpense, updateExpense } from "@/src/lib/models/expense"

// PUT /api/expenses/[id] - Update an expense
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const data = await request.json()

    // In a real application, you would verify that the expense belongs to the current user

    // Update the expense in the database
    const expense = await updateExpense(id, data)

    return NextResponse.json(expense)
  } catch (error) {
    console.error("Error updating expense:", error)
    return NextResponse.json({ error: "Failed to update expense" }, { status: 500 })
  }
}

// DELETE /api/expenses/[id] - Delete an expense
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    // In a real application, you would verify that the expense belongs to the current user

    // Delete the expense from the database
    await deleteExpense(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting expense:", error)
    return NextResponse.json({ error: "Failed to delete expense" }, { status: 500 })
  }
}

