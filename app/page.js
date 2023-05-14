import { connectDB } from '@/util/db'
import { MongoClient } from 'mongodb'

export default async function Home() {

    // const client = await connectDB;
    // const db = client.db('forum')
    // let result = await db.collection('post').find().toArray()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            main
        </main>
    )
}
