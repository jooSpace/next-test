'use client'

import { useEffect } from "react"
import Link from "next/link"

export default function ListItem({result}) {

    useEffect(() => {

        //서버에 부탁해서 DB게시물 가져옴, 단점 : 검색노출 어려움 -> html 렌더링 후 호출 되기 떄문에
        
        // console.log(result);
    }, [])

    return(
        <div>
        {
            result.map((val, i) => {
                return(
                    <div className="list-item" key={i}>
                        <Link prefetch={false} href={'/detail/' + result[i]._id}>
                            <p>{result[i].title}</p>
                        </Link>
                        {/* <DetailLink></DetailLink> */}
                        <Link href={'/edit/' + result[i]._id}>수정</Link>
                        <span onClick={(e) => 
                            fetch('/api/post/delete', {
                                method: "POST",
                                body : result[i]._id
                            }).then((res) => {
                                if(res.status == 200) {
                                    return res.json();
                                } else {
                                    //서버가 에러코드 전송시 실행할 코드
                                }
                            }).then((result) => {
                                e.target.parentElement.style.opacity = 0;
                                setTimeout(() => {
                                    e.target.parentElement.style.display = 'none'
                                }, 1000)
                                console.log(result)
                            }).catch((error) => {
                                console.log(error)
                            })
                        }>삭제</span>
                        <p>1월 1일</p>
                    </div>
                )
            })
        }
        </div>
    )
}