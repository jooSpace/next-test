'use client'

export default function Error({error, reset}) {
    return ( 
        <div>
            <h4>에러남 !!!</h4>
            <button onClick={() => reset()}>리셋 버튼</button>
        </div>
        
    )
}