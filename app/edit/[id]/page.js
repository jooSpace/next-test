import { connectDB } from "@/util/db"
import { ObjectId } from "mongodb";

export default async function Edit(props) {

    const db = (await connectDB).db('forum')
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id)})
    
    return(
        <div className="p-20">
            <p>수정페이지</p>
            <form action="/api/post/edit" method="POST">
                <input name ="title" placeholder="글제목" defaultValue={result.title} />
                <input name="content" placeholder="글내용" defaultValue={result.content} />
                <input style={{ display:'none' }} name="_id" defaultValue={result._id.toString()}/>
                <button type="submit">수정</button>
            </form>
        </div>
    )
}