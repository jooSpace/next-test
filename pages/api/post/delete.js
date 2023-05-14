import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    if (req.method == 'POST') {

        try {
            let session = await getServerSession(req, res, authOptions)
            const db = (await connectDB).db('forum')
            let userInfor = await db.collection('post').findOne({_id : new ObjectId(req.body)})

            if(userInfor.author == session.user.email) {
                let result = await db.collection('post').deleteOne({ _id : new ObjectId(req.body)})
                return res.status(200).json('삭제완료');
            } else {
                return res.status(500).json("작성자가 아닙니다.")
            }
            
        } catch(error) {
            res.status(500)
        }
    }
}