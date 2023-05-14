import { connectDB } from "@/util/db"

export default async function handler(req, res) {

    const db = (await connectDB).db('forum')
    let  result = await db.collection('post').find().toArray()
    const date = new Date;

    return res.status(200).json(result)
}

// 200 성공
// 500 에러 
// 400 유저잘못