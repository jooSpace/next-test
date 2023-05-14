import { connectDB } from "@/util/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {

    let session = await getServerSession(req,res, authOptions)
    let userEmail = session.user.email

    console.log(session);
    if (session) {
        req.body.author = userEmail
    }

    if(req.method == 'POST') {
        if(req.body.title == '') {
            return res.status(500).json('빈칸')
        }
        try {
            const db = (await connectDB).db('forum')
            let result = await db.collection('post').insertOne(req.body)
            res.redirect(302, '/list')
        } catch (error) {
            console.log(error);
        }
    }
}