import { useState, useEffect, useRef } from 'react';
import TailButton from '../ui/TailButton'

export default function RefVal() {
  let cnt = 0;                           // 컴포넌트 변수 (지역변수)
  const [stCnt, setStCnt] = useState(0); // state변수
  const refCnt = useRef(0);              // ref 변수



  const handleLocal = () => {
    cnt = cnt + 1;
    console.log("cnt = ", cnt) ;
  }

  const handleState = () => {
    setStCnt(stCnt+1); //set로 바꾸고 useEffect하면 설정한 변수가 바뀔때마다 하는 일 설정 가능
  }

  const handleRef = () => {
    refCnt.current = refCnt.current + 1 ;
    console.log("refCnt = ", refCnt.current)
    // 바뀐값을 가지고있다가 화면이 렌더링될때 적용됨
  }



  useEffect(()=>{
    console.log("stCnt = ", stCnt);
    //화면에 바로 반영됨
  },[stCnt])




  return (
    <div className="w-10/12 grid grid-cols-3
                    text-center
                    gap-4">
      <div>
        컴포넌트 변수 (지역변수) : {cnt}
      </div>
      <div>
        State 변수 : {stCnt}
      </div>
      <div>
        Ref 변수 : {refCnt.current}
        {/* 그대로 쓰면 안되고ref.current해야 됨 */}
      </div>
      <div>
        <TailButton caption="컴포넌트 변수" 
                    color="blue"
                    handleClick={handleLocal}/> 
                    {/* 전달되는 값이 없을땐 괄호 x , 인수 있을땐 화살표함수로 씀 */}
      </div>
      <div>
        <TailButton caption="State 변수" 
                    color="blue"
                    handleClick={handleState}/>
      </div>
      <div>
        <TailButton caption="Ref 변수" 
                    color="blue"
                    handleClick={handleRef}/>
      </div>
    </div>
  )
}
