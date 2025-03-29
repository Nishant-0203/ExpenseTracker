import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { Expense } from '@/models/expense'

export async function POST(req: Request) {
  try {
    await connectToDatabase()
    const expense = await req.json()
    const newExpense = await Expense.create(expense)
    return NextResponse.json(newExpense, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create expense' },
      { status: 500 }
    )
  }
}
