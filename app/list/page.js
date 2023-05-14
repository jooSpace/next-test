import { connectDB } from "@/util/db";
import ListItem from "./ListItem";

// export const dynamic = 'force-dynamic'

async function List() {

    const db = (await connectDB).db('forum')
    let  result = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            <ListItem result={result}></ListItem>
        </div>
    );
}

export default List;