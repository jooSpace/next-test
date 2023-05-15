import { connectDB } from "@/util/db";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

async function Detail(props) {

    const db = (await connectDB).db('forum')
    // let  result = await db.collection('post').findOne({ title : '안녕'})
    let  result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id) })

    return (
        <div>
            <p>상세페이지</p>
            <p>{result.title}</p>
            <p>{result.content}</p>
            <Comment _id={result._id.toString()}/>
        </div>
    )
}

export default Detail;