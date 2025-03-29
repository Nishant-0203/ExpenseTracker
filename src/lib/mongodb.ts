import mongoose from 'mongoose'

const MONGODB_URI: string = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) return

  return mongoose.connect(MONGODB_URI)
}
