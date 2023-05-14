export default function WRite() {

    

    return(
        <div className="p-20">
            <p>글작성</p>
            <form action="/api/post/new" method="POST">
                <input name ="title" placeholder="글제목" />
                <input name="content" placeholder="글내용"/>
                <button type="submit">전송</button>
            </form>
        </div>
    )
}