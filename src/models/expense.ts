import mongoose from 'mongoose'

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true }
}, {
  timestamps: true
})

export const Expense = mongoose.models.Expense || mongoose.model('Expense', expenseSchema)
