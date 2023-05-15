import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler (req, res) {
    if(req.method == 'POST') {
        let session = await getServerSession(req, res, authOptions)
        req.body = JSON.parse(req.body)
        let data = {
            content : req.body.comment,
            parent : new ObjectId(req.body._id),
            author : session.user.email
        }

        const db = (await connectDB).db('forum')
        let result = await db.collection('comment').insertOne(data)
        res.status(200).json('저장완료')
    } 
}