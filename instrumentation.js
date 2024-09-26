import connectDB from '@/config/db.ts'

export async function register() {
    await connectDB()
}