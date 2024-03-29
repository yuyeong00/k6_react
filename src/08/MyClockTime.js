import { useState, useEffect } from "react";

function MyClockTime(){

    const [currentTime, setCurrentTime] = useState(new Date);
    const [tm, setTm] = useState();

    // (콜백함수, 두번째 인수[]빈칸이면) : 첫번째 한번만 실행 됨
    // 컴포넌트가 생성될 때 최초 한번
    useEffect(()=>{
        const t = setInterval(()=>{
            setCurrentTime(new Date)
        }, 1000)
        console.log("[]=", currentTime)

        return (()=>{clearInterval(t)})
    }, []); 

    // 대괄호 안의 변수가 바뀔때 마다 실행
    useEffect(()=>{
        console.log("[tm] = ", currentTime)
    },[tm])

    // 렌더링이 일어날 때마다 실행
    useEffect(()=>{
        console.log("[]없는 경우=", currentTime)
    })

    return (
        <h1 className="m-5 font-bold text-4xl">
            {currentTime && `현재시각 : ${currentTime.toLocaleTimeString()}`}
        </h1>
    );
}

export default MyClockTime;